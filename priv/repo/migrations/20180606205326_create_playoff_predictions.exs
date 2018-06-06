defmodule Pokedex.Repo.Migrations.CreatePlayoffPredictions do
  use Ecto.Migration

  def change do
    create table(:playoff_predictions) do
      add :phase,  :integer
      add :user_id, references("users")

      timestamps()
    end
  end
end
