defmodule Pokedex.Accounts.AllowedUser do
    use Ecto.Schema
    import Ecto.Changeset

    schema "allowed_users" do
        field(:username, :string)
        timestamps()
    end

    @doc false
    def changeset(allowed_user, attrs) do
      allowed_user
      |> cast(attrs, [:username])
      |> unique_constraint(:username)
    end
end
