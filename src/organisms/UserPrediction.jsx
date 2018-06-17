// @flow

import * as React from "react";
import { graphql } from "react-relay";
import withRelayData from "../services/withRelayData";
import UserPredictionList from "../molecules/UserPredictionList";

import UserPredictionListQuery from "./__generated__/UserPredictionListQuery";
import withRelayEnvironmentContext from "../services/withRelayEnvironmentContext";

const userPredictionListQuery = graphql`
  query UserPredictionListQuery {
    me {
      id
    }
    groupPredictions(first: 1000) {
      edges {
        node {
          match {
            id
            name
          }
          prediction
        }
      }
    }
    matches(first: 100) {
      edges {
        node {
          id
          name
          awayResult
          homeResult
          group
          date {
            iso8601
          }
          awayTeam {
            name
            id
            emojiString
          }
          homeTeam {
            name
            id
            emojiString
          }
        }
      }
    }
  }
`;

export const UserPrediction = withRelayEnvironmentContext(
  withRelayData(
    (props: UserPredictionListQuery & Object) => (
      <UserPredictionList {...props} query={props} />
    ),
    userPredictionListQuery,
  ),
);
