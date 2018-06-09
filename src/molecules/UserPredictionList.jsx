// @flow

import * as React from "react";
import UserPredictionGroup from "./UserPredictionGroup";
import groupBy from "lodash/groupBy";
import forEach from "lodash/forEach";
import find from "lodash/find";

export default class UserPredictionList extends React.Component<{}> {
  renderGroups = (matches, predictions) => {
    let groups = groupBy(matches, match => {
      return match.node.group;
    });
    let groupElements = [];
    forEach(groups, (matches, group) => {
      let predictionElements = {};
      matches.forEach(match => {
        let pred = find(predictions, prediction => {
          return prediction.node.match.name === match.node.name;
        });
        if (pred) {
          predictionElements[match.node.name] = pred.node.prediction;
        }
      });
      groupElements.push(
        <UserPredictionGroup
          key={group}
          group={group}
          matches={matches}
          environment={this.props.environment}
          predictions={predictionElements}
        />,
      );
    });
    return groupElements;
  };

  render() {
    return (
      <div>
        {this.renderGroups(
          this.props.matches.edges,
          this.props.groupPredictions.edges,
        )}
      </div>
    );
  }
}
