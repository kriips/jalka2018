defmodule Pokedex.Repo.Migrations.CreatePlayoffResults do
  use Ecto.Migration

  def change do
    create table(:playoff_results) do
      add :phase,  :integer
      add :team_id, references("teams")

      timestamps()
    end
  end
end
