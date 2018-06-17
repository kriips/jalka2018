// @flow

import React, { Component } from "react";
import { TableRow, TableCell } from "material-ui/Table";
import Button from "material-ui/Button";
import Modal from "react-responsive-modal";

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
          <div>{this.props.position}.</div>
        </TableCell>
        <TableCell>
          <div>{this.props.username}</div>
        </TableCell>
        <TableCell>
          <div>{this.props.groupScore}</div>
        </TableCell>
        <TableCell>
          <div>{this.props.playoffScore}</div>
        </TableCell>
        <TableCell>
          <div>{+this.props.groupScore + +this.props.playoffScore}</div>
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
              {/*<Prediction />*/}
              Tuleb peatselt. Töö käib
            </Modal>
          </div>
        </TableCell>
      </TableRow>
    );
  }
}
