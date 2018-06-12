// @flow

import React, { Component } from "react";
import { TableRow, TableCell } from "material-ui/Table";
import Button from "material-ui/Button";
import Modal from "react-responsive-modal";
import { createRefetchContainer, graphql } from "react-relay";

class Prediction extends React.Component<{}> {
  render() {
    console.log(this.props);
    return <div />;
  }
}

export default createRefetchContainer(
  Prediction,
  {
    predictions: graphql`
      fragment Prediction_playoffPredictions on RootQueryType
        @argumentDefinitions(userId: { type: "String" }) {
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
  },
  {
    getVariables: props => ({
      userId: props.variables.userId,
    }),
  },
);
