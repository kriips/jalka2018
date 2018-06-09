defmodule PokedexWeb.Schema.Predictions do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  import Absinthe.Resolution.Helpers, only: [dataloader: 1, on_load: 2]

  alias PokedexWeb.Resolvers.GroupPredictionsResolver
  alias PokedexWeb.Resolvers.PlayoffPredictionsResolver

  node object(:group_prediction) do
    field(:user, :user, resolve: dataloader(:repo))
    field(:match, :match, resolve: dataloader(:repo))
    field(:prediction, :string)
  end

  connection(node_type: :group_prediction)

  object :group_predictions do
    connection field(:group_predictions, node_type: :group_prediction) do
      arg(:search_term, :string)
      resolve(&GroupPredictionsResolver.list_group_predictions/2)
    end

    field(:group_predictions_array, list_of(:group_predictions)) do
      resolve(&GroupPredictionsResolver.list_group_predictions/2)
    end
  end

  node object(:playoff_prediction) do
    field(:user, :user, resolve: dataloader(:repo))
    field(:phase, :integer)
    field(:teams, :teams, resolve: dataloader(:repo))
  end

  connection(node_type: :playoff_prediction)

  object :playoff_predictions do
    connection field(:playoff_predictions, node_type: :playoff_prediction) do
      arg(:search_term, :string)
      resolve(&PlayoffPredictionsResolver.list_playoff_predictions/2)
    end

    field(:group_predictions_array, list_of(:group_predictions)) do
      resolve(&PlayoffPredictionsResolver.list_playoff_predictions/2)
    end
  end


  object :group_prediction_mutations do
    payload field(:add_group_prediction) do
      input do
        field(:match_id, non_null(:id))
        field(:prediction, non_null(:string))
      end

      output do
        field :result, :string
        field :group_prediction, :group_prediction
      end

      resolve(&GroupPredictionsResolver.add_group_prediction/2)
    end
  end
end
