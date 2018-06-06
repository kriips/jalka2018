defmodule PokedexWeb.Resolvers.PlayoffPredictionsResolver do
  import Ecto.Query, only: [where: 3]
  alias Pokedex.{Repo, Football.PlayoffPrediction}
  alias Absinthe.Relay.Connection

  def list_playoff_predictions(args, _) when map_size(args) == 0 do
    playoff_predictions =
      PlayoffPrediction
      |> Repo.all()

    {:ok, playoff_predictions}
  end

  def list_playoff_predictions(%{search_term: term} = args, _) when is_nil(term) == false do
    # This runs the `where` clause even when the term == "",
    # but as premature optimization is the root of all evil,
    # I'll leave it like this.
    PlayoffPrediction
    |> where([s], like(s.slug, ^"%#{String.replace(term, "%", "\\%")}%"))
    |> Connection.from_query(&Repo.all/1, args)
  end

  def list_playoff_predictions(args, _) do
    PlayoffPrediction
    |> Connection.from_query(&Repo.all/1, args)
  end
end
