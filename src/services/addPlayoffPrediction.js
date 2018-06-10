// @flow

import type { Environment } from "relay-runtime";
import { commitMutation, graphql } from "react-relay";

import MutationError from "../services/MutationError";

const mutation = graphql`
  mutation addPlayoffPredictionMutation($input: AddPlayoffPredictionInput!) {
    addPlayoffPrediction(input: $input) {
      result
    }
  }
`;

const addPlayoffPrediction = (
  { phase, teamId }: { phase: number, teamId: number },
  environment: Environment,
): Promise<{ result: string }> => {
  console.log("commiting add playoff mutation", { phase, teamId, environment });
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables: {
        input: {
          phase: parseInt(phase),
          teamId: parseInt(teamId),
        },
      },
      onCompleted: (response, errors) => {
        console.log("mutation completed", { response, errors });
        if (!errors) {
          resolve({ result: response.addPlayoffPrediction.result });
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

export { addPlayoffPrediction as default, MutationError };
