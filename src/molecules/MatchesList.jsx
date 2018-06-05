// @flow

import * as React from "react";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";
import { createFragmentContainer, graphql } from "react-relay";

import MatchRow from "../molecules/MatchRow";

import MatchesList_matches from "./__generated__/MatchesList_matches";

type PropsType = {
  matches: MatchesList_matches,
};

type MatchType = {
  id: string,
  name: string,
  group: string,
  homeTeam: number,
  awayTeam: number,
  date: { iso8601: string },
};

class MatchesList extends React.Component<PropsType> {
  renderMatches = (matches: Array<MatchType>): Array<React.Element<*>> =>
    matches.map(match => <MatchRow key={match.id} match={match} />);

  render() {
    return <List>{this.renderMatches(this.props.matches)}</List>;
  }
}

export default createFragmentContainer(MatchesList, {
  matches: graphql`
    fragment MatchesList_matches on Match @relay(plural: true) {
      id
      ...MatchRow_match
    }
  `,
});
