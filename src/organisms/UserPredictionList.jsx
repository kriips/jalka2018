// @flow

import * as React from "react";

export default class UserPredictionList extends React.Component<{}> {
  render() {
    const list = this.props.matches.edges.map(edge => {
      console.log(edge);
      return <li key={edge.node.id}>{edge.node.awayTeam.id}</li>;
    });

    //
    return <ul>{list}</ul>;
  }
}
