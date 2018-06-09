defmodule PokedexWeb.Schema.Teams do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias PokedexWeb.Resolvers.TeamsResolver

  node object(:team) do
    field(:name, :string)
    field(:fifa_code, :string)
    field(:flag, :string)
    field(:emoji, :string)
    field(:emoji_string, :string)
  end

  connection(node_type: :team)

  object :teams do
    connection field(:teams, node_type: :team) do
      arg(:search_term, :string)
      resolve(&TeamsResolver.list_teams/2)
    end

    field(:teams_array, list_of(:teams)) do
      resolve(&TeamsResolver.list_teams/2)
    end
  end
end
