defmodule Pokedex.Football.Team do
  use Ecto.Schema
  import Ecto.Changeset

  alias Pokedex.Repo
  alias Pokedex.Football.PlayoffPrediction

  schema "teams" do
    field(:name, :string)
    field(:fifaCode, :string)
    field(:flag, :string)
    field(:emoji, :string)
    field(:emojiString, :string)
    many_to_many :playoff_predictions, PlayoffPrediction, join_through: "playoff_predictions_teams"

    timestamps()
  end

  @doc false
  def changeset(team, attrs) do
    team
    |> cast(attrs, [:name, :fifaCode, :flag, :emoji, :emojiString])
  end

  def get_team!(id), do: Repo.get!(Team, id)

end
