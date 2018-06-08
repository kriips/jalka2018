// @flow

import * as React from "react";
import { graphql } from "react-relay";
import withRelayData from "../services/withRelayData";
import UserPredictionList from "../molecules/UserPredictionList";

import UserPredictionListQuery from "./__generated__/UserPredictionListQuery";

const userPredictionListQuery = graphql`
  query UserPredictionListQuery {
    me {
      id
    }
    matches(first: 100) {
      edges {
        node {
          id
          group
          date {
            iso8601
          }
          awayTeam {
            name
            id
          }
          homeTeam {
            name
            id
          }
        }
      }
    }
  }
`;

export const UserPrediction = withRelayData(
  (props: UserPredictionListQuery & Object) => (
    <UserPredictionList {...props} query={props} />
  ),
  userPredictionListQuery,
);
