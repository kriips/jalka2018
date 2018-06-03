defmodule Pokedex.Football.Team do
  use Ecto.Schema
  import Ecto.Changeset

  schema "teams" do
    field(:name, :string)
    field(:fifaCode, :string)
    field(:flag, :string)
    field(:emoji, :string)
    field(:emojiString, :string)
#    has_many(:home_match, Pokedex.Football.Match, foreign_key: :home_team)
#    has_many(:away_match, Pokedex.Football.Match, foreign_key: :away_team)

    timestamps()
  end

  @doc false
  def changeset(team, attrs) do
    team
    |> cast(attrs, [:name, :fifaCode, :flag, :emoji, :emojiString])
  end

end
