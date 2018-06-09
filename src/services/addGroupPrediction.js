// @flow

import type { Environment } from "relay-runtime";
import { commitMutation, graphql } from "react-relay";

import MutationError from "../services/MutationError";

const mutation = graphql`
  mutation addGroupPredictionMutation($input: AddGroupPredictionInput!) {
    addGroupPrediction(input: $input) {
      result
    }
  }
`;

const addGroupPrediction = (
  { matchId, prediction }: { matchId: number, prediction: string },
  environment: Environment,
): Promise<{ result: string }> => {
  console.log("commiting mutation", { matchId, prediction, environment });
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables: {
        input: {
          matchId: parseInt(matchId),
          prediction,
        },
      },
      onCompleted: (response, errors) => {
        console.log("mutation completed", { response, errors });
        if (!errors) {
          resolve({ result: response.addGroupPrediction.result });
        } else {
          const customErrors: Array<Object> = errors;
          reject(new MutationError(customErrors));
        }
      },
      onError: error => {
        console.log("mutation error", error);
        reject(error);
      },
    });
  });
};

export { addGroupPrediction as default, MutationError };
