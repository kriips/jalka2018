// @flow

import React, { Component } from "react";

export class PredictionDetails extends React.Component<{}> {
  renderGroups = () => {
    let groupPreds = [];
    this.props.user.groupPredictions.forEach(pred => {
      groupPreds.push(
        <li className="mdc-list-item">
          {pred.match.homeTeam.name}-{pred.match.awayTeam.name}
        </li>,
      );
    });
    return groupPreds;
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.user.username}</h1>
        <h3>Grupimängude ennustus</h3>
        <ul className="mdc-list">{this.renderGroups()}</ul>
      </div>
    );
  }
}
