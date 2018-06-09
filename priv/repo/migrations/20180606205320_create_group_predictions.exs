defmodule Pokedex.Repo.Migrations.CreateGroupPredictions do
  use Ecto.Migration

  def change do
    create table(:group_prediction) do
      add :match_id,  references("matches")
      add :user_id, references("users")
      add(:prediction, :string)

      timestamps()
    end
  end
end
