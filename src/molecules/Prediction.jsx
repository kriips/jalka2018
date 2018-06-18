// @flow

import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import Prediction_predictions from "./__generated__/Prediction_predictions";

type PropsType = {
  event: Prediction_predictions,
};

export class Prediction extends React.Component<PropsType> {
  render() {
    console.log(this.props);
    return <div />;
  }
}

export default createFragmentContainer(
  Prediction,
  graphql`
    fragment Prediction_predictions on User {
      id
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
  `,
  {
    getVariables: props => ({
      userId: props.variables.userId,
    }),
  },
);
