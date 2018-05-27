defmodule PokedexWeb.Schema.Teams do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias PokedexWeb.Resolvers.TeamsResolver

  node object(:species) do
    field(:name, :string)
    field(:fifaCode, :string)
    field(:flag, :string)
    field(:emoji, :string)
    field(:emojiString, :string)
  end

  # connection(node_type: :species)

  # object :pokemons do
  #   connection field(:species, node_type: :species) do
  #     arg(:search_term, :string)
  #     resolve(&PokemonsResolver.list_species/2)
  #   end

  #   field(:species_array, list_of(:species)) do
  #     resolve(&PokemonsResolver.list_species/2)
  #   end
  # end
end
