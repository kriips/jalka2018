defmodule Pokedex.Repo.Migrations.CreateGroupPredictions do
  use Ecto.Migration

  def change do
    create table(:group_predictions) do
      add :match_id,  references("matches")
      add :user_id, references("users")
      add(:prediction, :integer)

      timestamps()
    end
  end
end
