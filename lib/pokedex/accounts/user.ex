defmodule Pokedex.Accounts.User do
  use Ecto.Schema

  import Ecto.Query, warn: false
  import Ecto.Changeset

  alias Pokedex.Accounts.AllowedUser
  alias Pokedex.Repo

  schema "users" do
    field(:password_hash, :string)
    field(:password, :string, virtual: true)
    field(:username, :string)
    has_many(:group_predictions, Pokedex.Football.GroupPrediction)
    has_many(:playoff_predictions, Pokedex.Football.PlayoffPrediction)
    field(:playoff_score, :integer, default: 0)
    field(:group_score, :integer, default: 0)

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :password, :group_score, :playoff_score])
    |> unique_constraint(:username)
    |> validate_required([:username, :password])
    |> validate_length(:password, min: 6)
    |> allowed_user_match
    |> hash_password
  end

  @doc false
  def create_changeset(user, attrs) do
    user
    |> cast(attrs, [:group_score, :playoff_score])
  end

  defp hash_password(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Comeonin.Bcrypt.hashpwsalt(pass))
      _ ->
        changeset
    end
  end

  defp allowed_user_match(changeset) do
    case get_allowed_user(get_field(changeset, :username)) do
      nil ->
        username_not_allowed_error(changeset)
      _ ->
        IO.puts "Allowed user matched: " <> get_field(changeset, :username)
        changeset
    end
  end

  defp get_allowed_user(username) do
    AllowedUser
    |> where([u], u.username == ^username)
    |> Repo.one()
    |> IO.inspect(label: "Allowed user found")
  end

  defp username_not_allowed_error(changeset) do
    add_error(changeset, :username, "peaks olema S! nimekirjast")
  end
end
