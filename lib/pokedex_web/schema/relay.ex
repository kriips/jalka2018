defmodule PokedexWeb.Schema.Relay do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias Pokedex.{Accounts, Football}
  alias Football.{Team, Match, GroupPrediction, PlayoffPrediction}
  alias Accounts.{User}

  object :relay do
    node field do
      resolve(fn
        %{type: :teams, id: id}, _ -> {:ok, Team.get_team!(id)}
        %{type: :group_predictions, id: id}, _ -> {:ok, GroupPrediction.get_group_prediction!(id)}
        %{type: :playfoff_predictions, id: id}, _ -> {:ok, PlayoffPrediction.get_playoff_prediction!(id)}
        %{type: :matches, id: id}, _ -> {:ok, Match.get_match!(id)}
        %{type: :user, id: id}, _ -> {:ok, Accounts.get_user!(id)}
        _, _ -> {:error, "Unknown node ID supplied."}
      end)
    end
  end

  node interface do
    resolve_type(fn
      %Match{}, _ ->
        :matches

      %GroupPrediction{}, _ ->
        :group_predictions

      %PlayoffPrediction{}, _ ->
        :playoff_predictions

      %Team{}, _ ->
        :teams

      %User{}, _ ->
        :user

      _, _ ->
        nil
    end)
  end
end
