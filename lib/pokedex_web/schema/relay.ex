defmodule PokedexWeb.Schema.Relay do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias Pokedex.{Pokemons, Accounts, Trainership, Football}
  alias Pokemons.{Species}
  alias Football.{Team, Match}
  alias Accounts.{User}
  alias Trainership.{Pokemon, Trainer}

  object :relay do
    node field do
      resolve(fn
        %{type: :pokemon, id: id}, _ -> {:ok, Trainership.get_pokemon!(id)}
        %{type: :trainer, id: id}, _ -> {:ok, Trainership.get_trainer!(id)}
        %{type: :species, id: id}, _ -> {:ok, Pokemons.get_species!(id)}
        %{type: :teams, id: id}, _ -> {:ok, Teams.get_teams!(id)}
        %{type: :matches, id: id}, _ -> {:ok, Matches.get_matches!(id)}
        %{type: :user, id: id}, _ -> {:ok, Accounts.get_user!(id)}
        %{type: :edge_released, id: id}, _ -> {:ok, %{pokemon: Trainership.get_pokemon!(id)}}
        %{type: :edge_caught, id: id}, _ -> {:ok, %{pokemon: Trainership.get_pokemon!(id)}}
        _, _ -> {:error, "Unknown node ID supplied."}
      end)
    end
  end

  node interface do
    resolve_type(fn
      %Pokemon{}, _ ->
        :pokemon

      %Trainer{}, _ ->
        :trainer

      %Species{}, _ ->
        :species

      %Match{}, _ ->
        :matches

      %Team{}, _ ->
        :teams

      %User{}, _ ->
        :user

      %{type: :released}, _ ->
        :event_released

      %{type: :caught}, _ ->
        :event_caught

      _, _ ->
        nil
    end)
  end
end
