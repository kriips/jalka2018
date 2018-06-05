defmodule PokedexWeb.Schema.Matches do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias PokedexWeb.Resolvers.MatchesResolver

  node object(:match) do
    field(:group, :string)
    field(:name, :string)
    field(:home_team, :integer)
    field(:away_team, :integer)
    field(:home_result, :integer)
    field(:away_result, :integer)
    field(:date, :datetime)
    field(:finished, :boolean)
  end

  connection(node_type: :match)

  object :matches do
    connection field(:matches, node_type: :match) do
      arg(:search_term, :string)
      resolve(&MatchesResolver.list_matches/2)
    end

    field(:matches_array, list_of(:matches)) do
      resolve(&MatchesResolver.list_matches/2)
    end
  end
end