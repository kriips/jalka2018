// // @flow
//
// import React, { Component } from "react";
// import { TableRow, TableCell } from "material-ui/Table";
// import Button from "material-ui/Button";
// import Modal from "react-responsive-modal";
// import { createFragmentContainer, graphql } from "react-relay";
//
// class Prediction extends React.Component<{}> {
//   render() {
//     console.log(this.props);
//     return <div />;
//   }
// }
//
// export default createFragmentContainer(
//   Prediction,
//   {
//     predictions: graphql`
//       fragment Prediction_predictions on User
//         @argumentDefinitions(id: { type: "String" }) {
//         id
//         playoffPredictions {
//           team {
//             name
//             emojiString
//           }
//           phase
//         }
//         groupPredictions {
//           prediction
//           match {
//             awayTeam {
//               emojiString
//               name
//             }
//             homeTeam {
//               emojiString
//               name
//             }
//           }
//         }
//       }
//     `,
//   },
//   {
//     getVariables: props => ({
//       id: props.variables.userId,
//     }),
//   },
// );
