defmodule Pokedex.Repo.Migrations.CreateMatches do
  use Ecto.Migration

  def change do
    create table(:matches) do
      add(:group, :string, null: false)
      add(:name, :string, null: false)
      add(:home_team, :integer, null: false)
      add(:away_team, :integer, null: false)
      add(:home_result, :integer)
      add(:away_result, :integer)
      add(:date, :naive_datetime)
      add(:finished, :boolean, null: false)

      timestamps()
    end

    create(index(:matches, [:id]))
  end
end
