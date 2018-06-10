defmodule PokedexWeb.Resolvers.GroupPredictionsResolver do
  import Ecto.Query, only: [where: 2, where: 3, from: 2]

  alias Pokedex.{Repo, Football.GroupPrediction}
  alias Absinthe.Relay.Connection
  alias Absinthe.Relay

  def list_group_predictions(args,  %{context: %{current_user: current_user}}) when map_size(args) == 0 do
    query = from gp in "group_prediction",
      where: gp.user_id == ^current_user.id
    group_predictions = Repo.all(query)
    {:ok, group_predictions}
  end

  def list_group_predictions(args,  %{context: %{current_user: current_user}}) do
    IO.puts "i am there"
    GroupPrediction
    |> where(user_id: ^current_user.id)
    |> Connection.from_query(&Repo.all/1, args)
  end

  def add_group_prediction(%{match_id: match_id, prediction: prediction}, %{context: %{current_user: current_user}})
      when is_nil(current_user) == false do
    IO.inspect(%{match_id: match_id})
    case Repo.get_by(GroupPrediction, user_id: current_user.id, match_id: match_id) do
      nil  -> %GroupPrediction{}            # Prediction not found, we build one
      group_prediction -> group_prediction  # Prediction exists, let's use it
    end
    |> GroupPrediction.create_changeset(%{user_id: current_user.id, match_id: match_id, prediction: prediction})
    |> Repo.insert_or_update()
    |> IO.inspect()

    {:ok, %{"group_prediction" => :group_prediction}}
  end
end
