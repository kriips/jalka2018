// @flow

import * as React from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import addGroupPrediction from "../services/addGroupPrediction";

const rowStyle = {
  paddingBottom: "10px",
};

export default class UserPredictionRow extends React.Component<{}> {
  state = {
    error: null,
    completed: false,
    processing: false,
  };

  submitGroupPrediction = prediction => {
    console.log("submitting mutation", this);
    if (!prediction || this.state.processing) return;
    this.setState(
      {
        error: null,
        processing: true,
      },
      () =>
        addGroupPrediction(
          {
            matchId: this.props.matchId,
            prediction: prediction,
          },
          this.props.environment,
        )
          .then(this.handleSuccess)
          .catch(this.handleError),
    );
  };

  handleSuccess = () => {
    console.log("success");
    this.setState({ error: null, completed: true, processing: false });
  };

  handleError = (error: Error) => {
    this.setState({
      completed: false,
      error,
      processing: false,
    });
  };

  render() {
    return (
      <div style={rowStyle}>
        <RadioGroup onChange={this.submitGroupPrediction} horizontal>
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
      </div>
    );
  }
}
