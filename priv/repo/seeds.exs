# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Pokedex.Repo.insert!(%Pokedex.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

if Code.ensure_compiled?(Pokedex.Accounts.AllowedUser) &&
     Pokedex.Accounts.AllowedUser |> Pokedex.Repo.aggregate(:count, :id) == 0 do
  Enum.each(Jason.decode!(File.read!('priv/repo/allowed_users.json')), fn attrs ->
    %Pokedex.Accounts.AllowedUser{}
    |> Pokedex.Accounts.AllowedUser.changeset(attrs)
    |> Pokedex.Repo.insert!()
  end)
end
