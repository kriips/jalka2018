// @flow

import * as React from "react";
import { graphql } from "react-relay";
import withRelayData from "../services/withRelayData";

import TopListQuery from "./__generated__/TopListQuery";
import withRelayEnvironmentContext from "../services/withRelayEnvironmentContext";
import TopListTable from "../molecules/TopListTable";

// const topListQuery = graphql`
//   query TopListQuery {
//     me {
//       id
//     }
//     users (first: 250) {
//       edges {
//         node {
//           username
//           playoffPredictions {
//             team {
//               name
//               emojiString
//             }
//             phase
//           }
//           groupPredictions {
//             prediction
//             match {
//               awayTeam {
//                 emojiString
//                 name
//               }
//               homeTeam {
//                 emojiString
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
const topListQuery = graphql`
  query TopListQuery {
    me {
      id
    }
    users(first: 250) {
      edges {
        node {
          username
        }
      }
    }
  }
`;

export const TopList = withRelayEnvironmentContext(
  withRelayData(
    (props: TopListQuery & Object) => <TopListTable {...props} query={props} />,
    topListQuery,
  ),
);