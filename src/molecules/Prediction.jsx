// @flow

import React from "react";
import { graphql } from "react-relay";
import withRelayData from "../services/withRelayData";
import { PredictionDetails } from "./PredictionDetails";

const predictionsQuery = graphql`
  query PredictionQuery($id: ID!) {
    playoffResults(first: 1000) {
      edges {
        node {
          phase
          team {
            name
            id
          }
        }
      }
    }
    user(id: $id) {
      id
      username
      playoffPredictions {
        team {
          name
          emojiString
        }
        phase
      }
      groupPredictions {
        prediction
        match {
          id
          name
          awayResult
          homeResult
          awayTeam {
            emojiString
            name
          }
          homeTeam {
            emojiString
            name
          }
        }
      }
    }
  }
`;

export default class Prediction extends React.Component<{}> {
  render() {
    let rawId = atob(this.props.userId);
    const InnerPrediction = withRelayData(
      props => <PredictionDetails {...props} />,
      predictionsQuery,
      {
        id: rawId.split(":")[1],
      },
    );
    return <InnerPrediction />;
  }
}
