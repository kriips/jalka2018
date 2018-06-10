// @flow

import React, { Component } from "react";
import { colorPallet } from "material-icons-react";
import { TableRow, TableCell } from "material-ui/Table";

export default class TopListRow extends React.Component<{}> {
  render() {
    return (
      <TableRow>
        <TableCell>
          <div>1.</div>
        </TableCell>
        <TableCell>
          <div>{this.props.username}</div>
        </TableCell>
        <TableCell>
          <div>0</div>
        </TableCell>
        <TableCell>
          <div>0</div>
        </TableCell>
        <TableCell>
          <div>0</div>
        </TableCell>
        <TableCell>
          <div>Tulevad peatselt</div>
        </TableCell>
      </TableRow>
    );
  }
}
