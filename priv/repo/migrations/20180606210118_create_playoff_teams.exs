defmodule Pokedex.Repo.Migrations.CreatePlayoffTeams do
  use Ecto.Migration

  def change do
    create table(:playoff_predictions_teams, primary_key: false) do
      add :playoff_prediction_id, references(:playoff_predictions)
      add :team_id, references(:teams)
    end
  end
end
