defmodule PokedexWeb.Schema.Accounts do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  import Absinthe.Resolution.Helpers, only: [dataloader: 1]
  alias PokedexWeb.Resolvers.AccountsResolver

  node object(:user) do
    field(:username, :string)
    field(:group_score, :integer)
    field(:playoff_score, :integer)
    field(:group_predictions, list_of(:group_prediction) , resolve: dataloader(:repo))
    field(:playoff_predictions, list_of(:playoff_prediction), resolve: dataloader(:repo))
  end

  connection(node_type: :user)

  object :accounts do
    field :user, :user do
      arg :id, non_null(:id)
      resolve &AccountsResolver.find_user/3
    end


  connection field(:users, node_type: :user) do
      resolve(&AccountsResolver.list_users/2)
    end

    field :me, :user do
      resolve(&AccountsResolver.current_user/2)
    end
  end

  object :accounts_mutations do
    payload field(:register) do
      input do
        field(:username, non_null(:string))
        field(:password, non_null(:string))
      end

      output do
        field(:user, :user)
      end

      resolve(&AccountsResolver.create_user/2)
    end

    payload field(:login) do
      input do
        field(:username, non_null(:string))
        field(:password, non_null(:string))
      end

      output do
        field(:user, :user)
        field(:token, non_null(:string))
      end

      resolve(&AccountsResolver.login_user/2)
    end
  end
end
