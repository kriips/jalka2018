// @flow

import type { Environment } from "relay-runtime";
import { commitMutation, graphql } from "react-relay";

import MutationError from "../services/MutationError";

const mutation = graphql`
  mutation removePlayoffPredictionMutation(
    $input: RemovePlayoffPredictionInput!
  ) {
    removePlayoffPrediction(input: $input) {
      result
    }
  }
`;

const removePlayoffPrediction = (
  { phase, teamId }: { phase: number, teamId: number },
  environment: Environment,
): Promise<{ result: string }> => {
  console.log("commiting remove playoff mutation", {
    phase,
    teamId,
    environment,
  });
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
          resolve({ result: response.removePlayoffPrediction.result });
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

export { removePlayoffPrediction as default, MutationError };
