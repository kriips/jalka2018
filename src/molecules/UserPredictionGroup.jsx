// @flow

import * as React from "react";
import UserPredictionRow from "./UserPredictionRow";

export default class UserPredictionGroup extends React.Component<{}> {
  renderMatches = matches => {
    let matchesElements = [];
    matches.forEach(match => {
      matchesElements.push(
        <UserPredictionRow
          group={match.node.group}
          key={match.node.id}
          matchId={match.node.name}
          awayTeam={match.node.awayTeam.name}
          awayTeamId={parseInt(match.node.awayTeam.id)}
          homeTeam={match.node.homeTeam.name}
          homeTeamId={match.node.homeTeam.id}
          date={match.node.date.iso8601}
          awayEmoji={match.node.awayTeam.emojiString}
          homeEmoji={match.node.homeTeam.emojiString}
          environment={this.props.environment}
        />,
      );
    });
    return matchesElements;
  };
  render() {
    return (
      <div>
        <h4>{this.props.group}</h4>
        <div>{this.renderMatches(this.props.matches)}</div>
      </div>
    );
  }
}
