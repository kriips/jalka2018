defmodule PokedexWeb.Resolvers.MatchesResolver do
  import Ecto.Query, only: [where: 3]
  alias Pokedex.{Repo, Football.Match}
  alias Absinthe.Relay.Connection

  def match_name(_, %{source: %{slug: slug}}) do
    {:ok, String.capitalize(slug)}
  end

  def list_matches(args, _) when map_size(args) == 0 do
      Match
      |> Connection.from_query(&Repo.all/1, args)
  end

  def list_matches(%{search_term: term} = args, _) when is_nil(term) == false do
    # This runs the `where` clause even when the term == "",
    # but as premature optimization is the root of all evil,
    # I'll leave it like this.
    Match
    |> where([s], like(s.slug, ^"%#{String.replace(term, "%", "\\%")}%"))
    |> Connection.from_query(&Repo.all/1, args)
  end

  def list_matches(args, _) do
    Match
    |> Connection.from_query(&Repo.all/1, args)
  end

  def update_match_result(%{match_id: match_id, home_result: home_result, away_result: away_result}, _) do
    IO.puts("updating result")
    IO.inspect(%{match_id: match_id, home_result: home_result, away_result: away_result})

    Repo.get_by(Match, id: match_id)
    |> IO.inspect
    |> Match.create_changeset(%{home_result: home_result, away_result: away_result, finished: true})
    |> Repo.update()
    |> update_results
  end

  def update_results(match) do
#   nullify current scores
    User
    |> Repo.update_all(set: [group_score: 0, playoff_score: 0])

#   go through all finished matches and change the score on all right predictions
    query =
      from(
        m in Match,
        where: m.finished == true
      )
    Repo.all(query)
    |> loop_matches

    match
  end

  def loop_matches(matches) do
    Enum.each matches, fn match ->
      cond do
        match.home_result > match.away_result ->
          awardPoints(match.id, match.home_team_id)
        match.home_result < match.away_result ->
          awardPoints(match.id, match.away_team_id)
        match.home_result == match.away_result ->
          awardPoints(match.id, 0)
      end
    end
    matches
  end

  def awardPoints(match_id, team_id) do
    team_name =
      if team_id == 0 do
        "Viik"
      else
        Repo.get_by(Team, id: team_id).name
      end

#    find predictions with right prediction
    query =
      from(
        g in GroupPrediction,
        where: g.prediction == ^team_name and g.match_id == ^match_id
      )
    Repo.all(query)
    |> increment_points

  end

  def increment_points(group_predictions) do
    Enum.each group_predictions, fn group_prediction ->
      user =
        User
        |> where(id: ^group_prediction.user_id)
        |> Repo.one()

      user
      |> User.create_changeset(%{user_id: user.id, group_score: user.group_score + 2})
      |> Repo.update()
    end
  end
 end