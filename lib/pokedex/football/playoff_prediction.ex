defmodule Pokedex.Football.PlayoffPrediction do
  use Ecto.Schema
  import Ecto.Changeset

  alias Pokedex.Football.Team
  alias Pokedex.Repo

  schema "playoff_predictions" do
    belongs_to(:user, Pokedex.Accounts.User)
    belongs_to(:team, Team)
    field(:phase, :integer)

    timestamps()
  end

  @doc false
  def changeset(group_prediction, attrs) do
    group_prediction
    |> cast(attrs, [:user, :match, :prediction])
  end

  def get_playoff_prediction!(id), do: Repo.get!(PlayoffPrediction, id)

  @doc false
  def create_changeset(playoff_prediction, attrs) do
    playoff_prediction
    |> cast(attrs, [:user_id, :team_id, :phase])
    |> cast_assoc(:user)
    |> assoc_constraint(:user)
    |> cast_assoc(:team)
    |> assoc_constraint(:team)
  end
end
