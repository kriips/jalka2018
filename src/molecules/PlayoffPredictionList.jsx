// @flow

import * as React from "react";
import UserPredictionGroup from "./UserPredictionGroup";
import groupBy from "lodash/groupBy";
import forEach from "lodash/forEach";
import find from "lodash/find";
import PlayoffPredictionPhase from "./PlayoffPredictionPhase";

const phases = [
  { phase: 16, points: 1 },
  { phase: 8, points: 2 },
  { phase: 4, points: 4 },
  { phase: 2, points: 6 },
  { phase: 1, points: 8 },
];

export default class PlayoffPredictionList extends React.Component<{}> {
  renderPhases = teams => {
    let phaseElements = [];
    phases.forEach(phase => {
      phaseElements.push(
        <PlayoffPredictionPhase
          phase={phase}
          key={phase.phase}
          environment={this.props.environment}
          teams={teams}
        />,
      );
    });
    return phaseElements;
  };

  render() {
    return <div>{this.renderPhases(this.props.teams.edges)}</div>;
  }
}
