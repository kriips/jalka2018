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
        groupScore: user.node.groupScore,
        playoffScore: user.node.playoffScore,
      };
    });
    flatUsers = flatUsers.sort((a, b) => {
      console.log({ a, b });
      return a.groupScore + a.playoffScore < b.groupScore + b.playoffScore;
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

    console.log("flatUsers", flatUsers);
    flatUsers.forEach(user => {
      console.log("user", user);
      usersElements.push(
        <TopListRow
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
    console.log("props", this.props);
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
