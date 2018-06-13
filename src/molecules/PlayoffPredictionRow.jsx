// @flow

import React, { Component } from "react";
import { ReactSelectize, MultiSelect } from "react-selectize";
import addPlayoffPrediction from "../services/addPlayoffPrediction";
import removePlayoffPrediction from "../services/removePlayoffPrediction";
import pull from "lodash/pull";
import difference from "lodash/difference";
import MaterialIcon, { colorPallet } from "material-icons-react";

import Grid from "material-ui/Grid";

const iconStyle = {
  margin: "14px auto",
};

export default class PlayoffPredictionRow extends React.Component<{}> {
  defaultValues = this.props.predictions.map(prediction => {
    return {
      label: prediction.node.team.name,
      value: prediction.node.team.id,
    };
  });

  state = {
    error: null,
    completed: false,
    processing: false,
    rowIcon: "",
    selectedItems: this.defaultValues.map(defaultValue => {
      return defaultValue.value;
    }),
  };

  successIcon = <MaterialIcon icon="done" color={colorPallet.green._200} />;
  pendingIcon = (
    <MaterialIcon icon="donut_large" color={colorPallet.amber._200} />
  );
  progressIcon = (
    <MaterialIcon icon="linear_scale" color={colorPallet.amber._200} />
  );
  errorIcon = <MaterialIcon icon="error" color={colorPallet.red._200} />;

  // valuesChanged = items => {
  //   let selItems = this.state.selectedItems;
  //   let itemIds = items ? items.map(({ value }) => value) : [];
  //   let removeItems = difference(selItems, itemIds);
  //   let addItems = difference(itemIds, selItems);
  //   let rawId;
  //   addItems.forEach(addItem => {
  //     rawId = atob(addItem).split(":")[1];
  //     selItems.push(addItem);
  //     this.sendMutation(selItems, "add", rawId);
  //   });
  //   removeItems.forEach(removeItem => {
  //     rawId = atob(removeItem).split(":")[1];
  //     pull(selItems, removeItem);
  //     this.sendMutation(selItems, "remove", rawId);
  //   });
  // };

  sendMutation = (selItems, action, rawId) => {
    this.setState(
      {
        error: null,
        processing: true,
        rowIcon: this.pendingIcon,
        selectedItems: selItems,
      },
      () => {
        if (action === "remove") {
          removePlayoffPrediction(
            {
              phase: this.props.phase,
              teamId: rawId,
            },
            this.props.environment,
          )
            .then(this.handleSuccess)
            .catch(this.handleError);
        } else {
          addPlayoffPrediction(
            {
              phase: this.props.phase,
              teamId: rawId,
            },
            this.props.environment,
          )
            .then(this.handleSuccess)
            .catch(this.handleError);
        }
      },
    );
  };

  handleSuccess = () => {
    if (this.props.phase === this.state.selectedItems.length) {
      this.setState({
        rowIcon: this.successIcon,
      });
    } else {
      this.setState({
        rowIcon: this.progressIcon,
      });
    }
  };

  handleError = (error: Error) => {
    this.setState({
      completed: false,
      error,
      processing: false,
      rowIcon: this.errorIcon,
    });
  };

  getRowIcon = () => {
    if (this.props.phase === this.state.selectedItems.length) {
      return this.successIcon;
    } else if (this.state.rowIcon) {
      return this.state.rowIcon;
    } else {
      return this.progressIcon;
    }
  };

  render() {
    return (
      <Grid container justify="center" spacing={24}>
        <Grid style={iconStyle} item xs={1} sm={1} md={1} lg={1}>
          {this.getRowIcon()}
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <MultiSelect
            placeholder="Vali võistkonnad"
            theme="material"
            width="auto"
            disabled="true"
            maxValues={this.props.phase}
            defaultValues={this.defaultValues}
            // onValuesChange={item => {
            //   this.valuesChanged(item);
            //}}
            options={this.props.teams.map(team => ({
              label: team.node.name,
              value: team.node.id,
            }))}
          />
        </Grid>
      </Grid>
    );
  }
}
