// @flow

import React, { Component } from "react";
import { ReactSelectize, SimpleSelect, MultiSelect } from "react-selectize";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import addGroupPrediction from "../services/addGroupPrediction";
import MaterialIcon, { colorPallet } from "material-icons-react";

import Grid from "material-ui/Grid";

export default class PlayoffPredictionRow extends React.Component<{}> {
  render() {
    console.log("props", this.props);
    return (
      <MultiSelect
        placeholder="Vali võistkonnad"
        theme="material"
        width="auto"
        maxValues={this.props.phase}
        options={this.props.teams.map(team => ({
          label: team.node.name,
          value: team.node.id,
        }))}
      />
    );
  }
}
