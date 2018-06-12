// @flow

import React, { Component } from "react";
import { TableRow, TableCell } from "material-ui/Table";
import Button from "material-ui/Button";
import Modal from "react-responsive-modal";
import { createFragmentContainer } from "../../flow-typed/npm/react-relay_v1.x.x";

export default class TopListRow extends React.Component<{}> {
  state = {
    open: false,
    openedUser: null,
  };

  onOpenModal = () => {
    console.log(this.props);
    this.setState({
      open: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      open: false,
      openedUser: null,
    });
  };

  render() {
    const { open } = this.state;
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
          <div>
            <Button
              variant="raised"
              color="secondary"
              onClick={this.onOpenModal}
            >
              Ennustus
            </Button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <Prediction />
            </Modal>
          </div>
        </TableCell>
      </TableRow>
    );
  }
}
