defmodule Pokedex.Football.Match do
  use Ecto.Schema
  import Ecto.Changeset

  alias Pokedex.Football.Team
  alias Pokedex.Repo

  schema "matches" do
    field(:group, :string)
    field(:name, :string)
    belongs_to(:home_team, Team)
    belongs_to(:away_team, Team)
    field(:home_result, :integer)
    field(:away_result, :integer)
    field(:date, :naive_datetime)
    field(:finished, :boolean, default: false)

#    has_many(:group_prediction, Pokedex.Football.GroupPrediction)

    timestamps()
  end

  @doc false
  def changeset(match, attrs) do
    match
    |> cast(attrs, [:group, :name, :home_team_id, :away_team_id, :home_result, :away_result, :date, :finished])
  end

  def get_match!(id), do: Repo.get!(Match, id)

  @doc false
  def create_changeset(match, attrs) do
    match
    |> cast(attrs, [:home_result, :away_result, :finished])
  end
end
