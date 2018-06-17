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
    users.forEach(user => {
      console.log("user", user);
      usersElements.push(
        <TopListRow
          username={user.node.username}
          key={user.node.username}
          playoffPredictions={user.node.playoffPredictions}
          groupPredictions={user.node.groupPredictions}
          groupScore={user.node.groupScore}
          playoffScore={user.node.playoffScore}
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
