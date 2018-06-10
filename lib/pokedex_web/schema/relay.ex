defmodule PokedexWeb.Schema.Relay do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias Pokedex.{Accounts, Football}
  alias Football.{Team, Match, GroupPrediction, PlayoffPrediction}
  alias Accounts.{User}

  object :relay do
    node field do
      resolve(fn
        %{type: :team, id: id}, _ -> {:ok, Team.get_team!(id)}
        %{type: :group_prediction, id: id}, _ -> {:ok, GroupPrediction.get_group_prediction!(id)}
        %{type: :playfoff_prediction, id: id}, _ -> {:ok, PlayoffPrediction.get_playoff_prediction!(id)}
        %{type: :match, id: id}, _ -> {:ok, Match.get_match!(id)}
        %{type: :user, id: id}, _ -> {:ok, Accounts.get_user!(id)}
        _, _ -> {:error, "Unknown node ID supplied."}
      end)
    end
  end

  node interface do
    resolve_type(fn
      %Match{}, _ ->
        :match

      %GroupPrediction{}, _ ->
        :group_prediction

      %PlayoffPrediction{}, _ ->
        :playoff_prediction

      %Team{}, _ ->
        :team

      %User{}, _ ->
        :user

      _, _ ->
        nil
    end)
  end
end
