defmodule Pokedex.Football.Match do
  use Ecto.Schema
  import Ecto.Changeset

  schema "matches" do
    field(:group, :string)
    field(:name, :string)
    field(:home_team, :integer)
    field(:away_team, :integer)
    field(:home_result, :integer)
    field(:away_result, :integer)
    field(:date, :naive_datetime)
    field(:finished, :boolean)

    timestamps()
  end

  @doc false
  def changeset(team, attrs) do
    team
    |> cast(attrs, [:group, :name, :home_team, :away_team, :home_result, :away_result, :date, :finished])
  end

end
