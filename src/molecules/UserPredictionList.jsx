// @flow

import * as React from "react";
import UserPredictionGroup from "./UserPredictionGroup";
import groupBy from "lodash/groupBy";
import forEach from "lodash/forEach";
import find from "lodash/find";
import keys from "lodash/keys";

export default class UserPredictionList extends React.Component<{}> {
  renderGroups = (matches, predictions) => {
    let groups = groupBy(matches, match => {
      return match.node.group;
    });
    let groupKeys = keys(groups).sort();
    let groupElements = [];
    forEach(groupKeys, groupKey => {
      let predictionElements = {};
      let matches = groups[groupKey].sort((a, b) => {
        return a.node.name - b.node.name;
      });
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
          key={groupKey}
          group={groupKey}
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
