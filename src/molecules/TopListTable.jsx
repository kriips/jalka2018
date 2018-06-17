// @flow

import * as React from "react";
import {
  default as Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "material-ui/Table";
import TopListRow from "./TopListRow";

export default class TopListTable extends React.Component<{}> {
  renderUsers = users => {
    let usersElements = [];
    let flatUsers = users.map(user => {
      return {
        username: user.node.username,
        userId: user.node.id,
        groupScore: user.node.groupScore,
        playoffScore: user.node.playoffScore,
      };
    });
    flatUsers = flatUsers.sort((a, b) => {
      return b.groupScore + b.playoffScore - (a.groupScore + a.playoffScore);
    });

    let sequence = 0;
    let currentPos = 1;
    let previousScore = 0;
    flatUsers.forEach(user => {
      if (previousScore !== user.groupScore + user.playoffScore) {
        currentPos = sequence + 1;
      }
      user.position = currentPos;
      previousScore = user.groupScore + user.playoffScore;
      sequence++;
    });

    flatUsers.forEach(user => {
      usersElements.push(
        <TopListRow
          userId={user.userId}
          username={user.username}
          key={user.username}
          groupScore={user.groupScore}
          playoffScore={user.playoffScore}
          position={user.position}
        />,
      );
    });
    return usersElements;
  };

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Koht</TableCell>
            <TableCell>Osaleja</TableCell>
            <TableCell>Punkte grupivoorust</TableCell>
            <TableCell>Punkte playoffist</TableCell>
            <TableCell>Kokku punkte</TableCell>
            <TableCell>Ennustuse detailid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{this.renderUsers(this.props.users.edges)}</TableBody>
      </Table>
    );
  }
}
