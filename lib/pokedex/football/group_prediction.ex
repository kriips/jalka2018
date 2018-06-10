defmodule Pokedex.Football.GroupPrediction do
  use Ecto.Schema
  import Ecto.Changeset

  alias Pokedex.Repo

  schema "group_prediction" do
    belongs_to(:user, Pokedex.Accounts.User)
    belongs_to(:match, Pokedex.Football.Match)
    field(:prediction, :string)

    timestamps()
  end

  @doc false
  def changeset(group_prediction, attrs) do
    group_prediction
    |> cast(attrs, [:user, :match, :prediction])
  end

  def get_group_prediction!(id) do
    Repo.get!(GroupPrediction, id)
  end

  @doc false
  def create_changeset(group_prediction, attrs) do
    group_prediction
    |> cast(attrs, [:user_id, :match_id, :prediction])
    |> cast_assoc(:user)
    |> assoc_constraint(:user)
    |> cast_assoc(:match)
    |> assoc_constraint(:match)
  end
end
