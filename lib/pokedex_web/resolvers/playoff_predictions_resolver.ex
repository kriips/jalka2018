defmodule PokedexWeb.Resolvers.PlayoffPredictionsResolver do
  import Ecto.Query, only: [where: 3, from: 2]
  alias Pokedex.{Repo, Football.PlayoffPrediction}
  alias Absinthe.Relay.Connection

  def list_playoff_predictions(args, _) when map_size(args) == 0 do
    playoff_predictions =
      PlayoffPrediction
      |> Repo.all()

    {:ok, playoff_predictions}
  end

  def list_playoff_predictions(%{search_term: term} = args, _) when is_nil(term) == false do
    # This runs the `where` clause even when the term == "",
    # but as premature optimization is the root of all evil,
    # I'll leave it like this.
    PlayoffPrediction
    |> where([s], like(s.slug, ^"%#{String.replace(term, "%", "\\%")}%"))
    |> Connection.from_query(&Repo.all/1, args)
  end

  def list_playoff_predictions(args, _) do
    PlayoffPrediction
    |> Connection.from_query(&Repo.all/1, args)
  end

  def add_playoff_prediction(%{team_id: team_id, phase: phase}, %{context: %{current_user: current_user}})
      when is_nil(current_user) == false do
    IO.inspect(%{team_id: team_id})
    case Repo.get_by(PlayoffPrediction, user_id: current_user.id, team_id: team_id, phase: phase) do
      nil  -> %PlayoffPrediction{}            # Prediction not found, we build one
      playoff_prediction -> playoff_prediction  # Prediction exists, let's use it
    end
    |> PlayoffPrediction.create_changeset(%{user_id: current_user.id, team_id: team_id, phase: phase})
    |> Repo.insert_or_update()
    |> IO.inspect()

    {:ok, %{"playoff_prediction" => :playoff_prediction}}
  end

  def remove_playoff_prediction(%{team_id: team_id, phase: phase}, %{context: %{current_user: current_user}})
      when is_nil(current_user) == false do
    IO.inspect(%{team_id: team_id, phase: phase})

    from(p in PlayoffPrediction, where: [user_id: ^current_user.id, team_id: ^team_id, phase: ^phase])
    |> Repo.delete_all

    {:ok, %{result: :ok}}
  end
end
