defmodule Pokedex.Repo.Migrations.AllowedUsers do
  use Ecto.Migration
    def change do
      create table(:allowed_users) do
        add(:id, :integer, null: false)
        add(:username, :string, null: false)
        timestamps()
      end
      create(index(:teams, [:id]))
    end
end
