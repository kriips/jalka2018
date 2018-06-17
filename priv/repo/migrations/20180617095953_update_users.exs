defmodule Pokedex.Repo.Migrations.UpdateUsers do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add(:group_score, :integer, default: 0)
      add(:playoff_score, :integer, default: 0)
    end
  end
end
