defmodule PokedexWeb.Resolvers.GroupPredictionsResolver do
  import Ecto.Query, only: [where: 3]
  alias Pokedex.{Repo, Football.GroupPrediction}
  alias Absinthe.Relay.Connection

  def list_group_predictions(args, _) when map_size(args) == 0 do
    group_predictions =
      GroupPrediction
      |> Repo.all()

    {:ok, group_predictions}
  end

  def list_group_predictions(%{search_term: term} = args, _) when is_nil(term) == false do
    # This runs the `where` clause even when the term == "",
    # but as premature optimization is the root of all evil,
    # I'll leave it like this.
    GroupPrediction
    |> where([s], like(s.slug, ^"%#{String.replace(term, "%", "\\%")}%"))
    |> Connection.from_query(&Repo.all/1, args)
  end

  def list_group_predictions(args, _) do
    GroupPrediction
    |> Connection.from_query(&Repo.all/1, args)
    |> return_result
  end

  defp return_result(args) do
    {:ok, %{result: "ok"}}
  end

  def add_group_prediction(%{match_id: match_id, prediction: prediction}, %{context: %{current_user: current_user}})
      when is_nil(current_user) == false do
    IO.inspect(%{match_id: match_id})
    case Repo.get_by(GroupPrediction, user_id: current_user.id, match_id: match_id) do
      nil  -> %GroupPrediction{}            # Prediction not found, we build one
      group_prediction -> group_prediction  # Prediction exists, let's use it
    end
    |> IO.inspect()
    |> GroupPrediction.create_changeset(%{user_id: current_user.id, match_id: match_id, prediction: prediction})
    |> IO.inspect()
    |> Repo.insert_or_update()
    |> IO.puts("Mutation is successful")
  end

  def add_group_prediction(%{match_id: match_id, prediction: prediction}, %{context: %{current_user: current_user}}) do
    IO.puts("Something went wrong with the mutation")
  end
end
