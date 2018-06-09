// @flow

import * as React from "react";
import UserPredictionGroup from "./UserPredictionGroup";
import groupBy from "lodash/groupBy";
import forEach from "lodash/forEach";

export default class UserPredictionList extends React.Component<{}> {
  renderGroups = matches => {
    let groups = groupBy(matches, match => {
      return match.node.group;
    });
    let groupElements = [];
    forEach(groups, (matches, group) => {
      groupElements.push(
        <UserPredictionGroup
          key={group}
          group={group}
          matches={matches}
          environment={this.props.environment}
        />,
      );
    });
    return groupElements;
  };

  render() {
    return <div>{this.renderGroups(this.props.matches.edges)}</div>;
  }
}
