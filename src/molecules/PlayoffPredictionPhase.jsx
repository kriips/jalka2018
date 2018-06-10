// @flow

import * as React from "react";
import PlayoffPredictionRow from "./PlayoffPredictionRow";

export default class PlayoffPredictionPhase extends React.Component<{}> {
  renderTeams = (teams, predictions) => {
    return (
      <PlayoffPredictionRow
        teams={teams}
        predictions={predictions}
        phase={this.props.phase.phase}
        key={this.props.phase.phase}
        environment={this.props.environment}
      />
    );
  };
  render() {
    return (
      <div>
        <h4>1/{this.props.phase.phase}</h4>
        <h5>Iga õige võistkonna eest punkte: {this.props.phase.points}</h5>
        <div>{this.renderTeams(this.props.teams, this.props.predictions)}</div>
      </div>
    );
  }
}
