defmodule PokedexWeb.Resolvers.TeamsResolver do
  import Ecto.Query, only: [where: 3]
  alias Pokedex.{Repo, Football.Team}
  alias Absinthe.Relay.Connection

  def team_name(_, %{source: %{slug: slug}}) do
    {:ok, String.capitalize(slug)}
  end

  def list_teams(args, _) when map_size(args) == 0 do
    teams =
      Team
      |> Repo.all()

    {:ok, teams}
  end

  def list_teams(%{search_term: term} = args, _) when is_nil(term) == false do
    # This runs the `where` clause even when the term == "",
    # but as premature optimization is the root of all evil,
    # I'll leave it like this.
    Team
    |> where([s], like(s.slug, ^"%#{String.replace(term, "%", "\\%")}%"))
    |> Connection.from_query(&Repo.all/1, args)
  end

  def list_teams(args, _) do
    Team
    |> Connection.from_query(&Repo.all/1, args)
  end
end
