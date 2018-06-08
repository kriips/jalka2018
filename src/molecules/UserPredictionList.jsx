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
    forEach(groups, (matches, group) => {
      console.log("gr", group);
      return <UserPredictionGroup key={group} matches={matches} />;
    });
  };

  render() {
    return <div>{this.renderGroups(this.props.matches.edges)}</div>;
  }
}
