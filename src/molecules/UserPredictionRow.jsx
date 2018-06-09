// @flow

import * as React from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import addGroupPrediction from "../services/addGroupPrediction";
import MaterialIcon, { colorPallet } from "material-icons-react";

import Grid from "material-ui/Grid";

const iconStyle = {
  margin: "14px auto",
};

export default class UserPredictionRow extends React.Component<{}> {
  state = {
    error: null,
    completed: false,
    processing: false,
    rowIcon: "",
  };

  successIcon = <MaterialIcon icon="done" color={colorPallet.green._200} />;
  pendingIcon = (
    <MaterialIcon icon="donut_large" color={colorPallet.amber._200} />
  );
  errorIcon = <MaterialIcon icon="error" color={colorPallet.red._200} />;

  submitGroupPrediction = prediction => {
    let rawId = atob(this.props.matchId);
    if (!prediction || this.state.processing) return;
    this.setState(
      {
        error: null,
        processing: true,
        rowIcon: this.pendingIcon,
      },
      () =>
        addGroupPrediction(
          {
            matchId: rawId.split(":")[1],
            prediction: prediction,
          },
          this.props.environment,
        )
          .then(this.handleSuccess)
          .catch(this.handleError),
    );
  };

  handleSuccess = () => {
    this.setState({
      error: null,
      completed: true,
      processing: false,
      rowIcon: this.successIcon,
    });
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
    // console.log('pred', {match: this.props.matchId, pred: this.props.prediction});
    if (this.props.prediction) {
      return this.successIcon;
    } else {
      return this.state.rowIcon;
    }
  };

  render() {
    return (
      <Grid container justify="center" spacing={24}>
        <Grid style={iconStyle} item xs={1} sm={1} md={1} lg={1}>
          {this.getRowIcon()}
        </Grid>
        <Grid style={iconStyle} item xs={1} sm={1} md={1} lg={1}>
          {this.props.matchName}:
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <RadioGroup
            value={this.props.prediction}
            onChange={this.submitGroupPrediction}
            horizontal
          >
            <RadioButton
              value={this.props.homeTeam}
              iconSize={20}
              iconInnerSize={9}
              rootColor={"LightSlateGrey"}
              pointColor={"Navy"}
            >
              {this.props.homeEmoji} {this.props.homeTeam}
            </RadioButton>
            <RadioButton
              value="Viik"
              iconSize={20}
              iconInnerSize={9}
              rootColor={"LightSlateGrey"}
              pointColor={"Navy"}
            >
              Viik
            </RadioButton>
            <RadioButton
              value={this.props.awayTeam}
              iconSize={20}
              iconInnerSize={9}
              rootColor={"LightSlateGrey"}
              pointColor={"Navy"}
            >
              {this.props.awayTeam} {this.props.awayEmoji}
            </RadioButton>
          </RadioGroup>
        </Grid>
      </Grid>
      // <div style={rowStyle}>
      //   <div style={iconStyle}>
      //     {this.getRowIcon()}
      //   </div>
      //   <div style={boxStyle}>
      //     <RadioGroup value={this.props.prediction} onChange={this.submitGroupPrediction} horizontal>
      //       <RadioButton
      //         value={this.props.homeTeam}
      //         iconSize={20}
      //         iconInnerSize={9}
      //         rootColor={"LightSlateGrey"}
      //         pointColor={"Navy"}
      //       >
      //         {this.props.homeEmoji} {this.props.homeTeam}
      //       </RadioButton>
      //       <RadioButton
      //         value="Viik"
      //         iconSize={20}
      //         iconInnerSize={9}
      //         rootColor={"LightSlateGrey"}
      //         pointColor={"Navy"}
      //       >
      //         Viik
      //       </RadioButton>
      //       <RadioButton
      //         value={this.props.awayTeam}
      //         iconSize={20}
      //         iconInnerSize={9}
      //         rootColor={"LightSlateGrey"}
      //         pointColor={"Navy"}
      //       >
      //         {this.props.awayTeam} {this.props.awayEmoji}
      //       </RadioButton>
      //     </RadioGroup>
      //   </div>
      // </div>
    );
  }
}
