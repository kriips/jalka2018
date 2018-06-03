defmodule Pokedex.Repo.Migrations.AllowedUsers do
  use Ecto.Migration
    def change do
      create table(:allowed_users) do
        add(:username, :string, null: false)

        timestamps()
      end
    end
end
