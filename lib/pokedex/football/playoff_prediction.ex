defmodule Pokedex.Football.PlayoffPrediction do
  use Ecto.Schema
  import Ecto.Changeset

  alias Pokedex.Football.Team
  alias Pokedex.Repo

  schema "playoff_prediction" do
    belongs_to(:user, Pokedex.Accounts.User)
    field(:phase, :integer)
    many_to_many :teams, Team, join_through: "playoff_predictions_teams"

    timestamps()
  end

  @doc false
  def changeset(group_prediction, attrs) do
    group_prediction
    |> cast(attrs, [:user, :match, :prediction])
  end

  def get_playoff_prediction!(id), do: Repo.get!(PlayoffPrediction, id)

end
