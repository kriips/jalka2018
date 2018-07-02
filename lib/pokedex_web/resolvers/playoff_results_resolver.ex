defmodule PokedexWeb.Resolvers.PlayoffResultsResolver do
  import Ecto.Query, only: [where: 2, from: 2]
  alias Pokedex.{Repo, Football.PlayoffPrediction, Football.PlayoffResult}
  alias Absinthe.Relay.Connection
  alias Pokedex.Accounts.User

  def list_playoff_results(args, _) when map_size(args) == 0 do
    playoff_results =
      PlayoffResult
      |> Repo.all()

    {:ok, playoff_results}
  end

  def list_playoff_results(args, _) do
    PlayoffResult
    |> Connection.from_query(&Repo.all/1, args)
  end

  def add_playoff_result(%{team_id: team_id, phase: phase}, _) do
    IO.inspect(%{team_id: team_id})
    case Repo.get_by(PlayoffResult, team_id: team_id, phase: phase) do
      nil  -> %PlayoffResult{}            # Result not found, we build one
      playoff_result -> playoff_result  # Result exists, let's use it
    end
    |> PlayoffResult.create_changeset(%{team_id: team_id, phase: phase})
    |> Repo.insert_or_update()
    |> IO.inspect()

    update_results()
    {:ok, %{"playoff_result" => :playoff_result}}
  end

  def remove_playoff_result(%{team_id: team_id, phase: phase}, _) do
    from(p in PlayoffResult, where: [team_id: ^team_id, phase: ^phase])
    |> Repo.delete_all

    update_results()

    {:ok, %{result: :ok}}
  end

  def update_results() do
    #   nullify current scores
    User
    |> Repo.update_all(set: [playoff_score: 0])

    #   go through all playoff results and change the score on all right predictions
    PlayoffResult
    |> Repo.all()
    |> loop_results

  end

  def loop_results(results) do
    Enum.each results, fn result ->
      awardPoints(result.phase, result.team_id)
    end
    results
  end

  def awardPoints(phase, team_id) do
    # find predictions with right prediction
    query =
      from(
        p in PlayoffPrediction,
        where: p.phase == ^phase and p.team_id == ^team_id
      )
    Repo.all(query)
    |> increment_points

  end

  def increment_points(playoff_predictions) do
    Enum.each playoff_predictions, fn playoff_prediction ->
      user =
        User
        |> where(id: ^playoff_prediction.user_id)
        |> Repo.one()

      phase_points =
        case playoff_prediction.phase do
          16 ->  1
          8 -> 2
          4 -> 4
          2 -> 6
          1 -> 8
        end

      user
      |> User.create_changeset(%{user_id: user.id, playoff_score: user.playoff_score + phase_points})
      |> Repo.update()
    end
  end
end
