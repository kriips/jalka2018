// @flow

import * as React from "react";
import UserPredictionRow from "./UserPredictionRow";

export default class UserPredictionGroup extends React.Component<{}> {
  renderMatches = matches => {
    matches.forEach(match => {
      console.log(match);
      return (
        <UserPredictionRow
          group={match.node.group}
          key={match.node.id}
          awayTeam={match.node.awayTeam.name}
          awayTeamId={match.node.awayTeam.id}
          homeTeam={match.node.homeTeam.name}
          homeTeamId={match.node.homeTeam.id}
          date={match.node.date.iso8601}
        />
      );
    });
  };
  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.key}</h4>
        <div>{this.renderMatches(this.props.matches)}</div>
      </div>
    );
  }
}
