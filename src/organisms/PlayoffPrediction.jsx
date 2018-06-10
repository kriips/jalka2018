// @flow

import * as React from "react";
import { graphql } from "react-relay";
import withRelayData from "../services/withRelayData";

import PlayoffPredictionListQuery from "./__generated__/PlayoffPredictionListQuery";
import withRelayEnvironmentContext from "../services/withRelayEnvironmentContext";
import PlayoffPredictionList from "../molecules/PlayoffPredictionList";

const playoffPredictionListQuery = graphql`
  query PlayoffPredictionListQuery {
    me {
      id
    }
    teams(first: 100) {
      edges {
        node {
          id
          name
          emojiString
        }
      }
    }
    playoffPredictions(first: 1000) {
      edges {
        node {
          phase
          team {
            id
            name
          }
        }
      }
    }
  }
`;

export const PlayoffPrediction = withRelayEnvironmentContext(
  withRelayData(
    (props: PlayoffPredictionListQuery & Object) => (
      <PlayoffPredictionList {...props} query={props} />
    ),
    playoffPredictionListQuery,
  ),
);
