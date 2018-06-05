defmodule PokedexWeb.Resolvers.MatchesResolver do
  import Ecto.Query, only: [where: 3]
  alias Pokedex.{Repo, Football.Match}
  alias Absinthe.Relay.Connection

  def match_name(_, %{source: %{slug: slug}}) do
    {:ok, String.capitalize(slug)}
  end

  def list_matches(args, _) when map_size(args) == 0 do
    matches =
      Match
      |> Repo.all()

    {:ok, matches}
  end

  def list_matches(%{search_term: term} = args, _) when is_nil(term) == false do
    # This runs the `where` clause even when the term == "",
    # but as premature optimization is the root of all evil,
    # I'll leave it like this.
    Match
    |> where([s], like(s.slug, ^"%#{String.replace(term, "%", "\\%")}%"))
    |> Connection.from_query(&Repo.all/1, args)
  end

  def list_matches(args, _) do
    Match
    |> Connection.from_query(&Repo.all/1, args)
  end
end
