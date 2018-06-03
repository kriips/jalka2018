defmodule Pokedex.Football.GroupPrediction do
  use Ecto.Schema
  import Ecto.Changeset

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

end
