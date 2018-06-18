// @flow

import React from "react";
import { graphql } from "react-relay";
import withRelayEnvironmentContext from "../services/withRelayEnvironmentContext";
import withRelayData from "../services/withRelayData";
import PredictionQuery from "./__generated__/PredictionQuery";
import { PredictionDetails } from "./PredictionDetails";

const predictionsQuery = graphql`
  query PredictionQuery($id: ID!) {
    user(id: $id) {
      id
      username
      groupScore
      playoffScore
    }
  }
`;

const getVars = () => {
  return { ["id"]: 1 };
};

export const Prediction = withRelayEnvironmentContext(
  withRelayData(
    (props: PredictionQuery & Object) => (
      <PredictionDetails {...props} query={props} />
    ),
    predictionsQuery,
    getVars(),
  ),
);
