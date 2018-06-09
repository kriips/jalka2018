// @flow

import * as React from "react";
import Grid from "material-ui/Grid";

import type { ContextRouter } from "react-router-dom";
import { withStyles } from "material-ui/styles";

import PaperSheet from "../atoms/PaperSheet";
import ErrorMessage from "../atoms/ErrorMessage";
import catchPokemon from "../services/catchPokemon";
import type { ContextType } from "../services/withRelayEnvironmentContext";
import withRelayEnvironmentContext from "../services/withRelayEnvironmentContext";
import { UserPrediction } from "../organisms/UserPrediction";
import { PlayoffPrediction } from "../organisms/PlayoffPrediction";

type PropsType = ContextRouter &
  ContextType & {
    classes: { qrReader: string },
  };

type StateType = {
  error: ?Error,
  processing: boolean,
  tokenInput: string,
};

const styles = {
  qrReader: {
    width: "100%",
  },
};

class Ennusta extends React.Component<PropsType, StateType> {
  state = {
    processing: false,
    tokenInput: "",
    error: null,
  };

  handleTokenInputChange = (event: Object) => {
    this.setState({ tokenInput: event.target.value });
  };

  handleSubmit = (event: Object) => {
    event.preventDefault();
    this.handleToken(this.state.tokenInput);
  };

  handleToken = (data: string) => {
    if (!data || this.state.processing) return;
    this.setState(
      {
        error: null,
        processing: true,
        tokenInput: data,
      },
      () =>
        catchPokemon(
          {
            nestToken: data,
          },
          this.props.environment,
        )
          .then(this.handleSuccess)
          .catch(this.handleError),
    );
  };

  handleSuccess = ({ event }: { event: Object }) => {
    alert(`You have caught ${event.pokemon.species.name}. Congrats!`);
    this.setState({ processing: false, tokenInput: "" });
  };

  handleError = (error: Error) =>
    this.setState({
      processing: false,
      error,
    });

  handleScannerError = () =>
    this.setState({ error: new Error("Scanner error") });

  maybeRenderError = (): ?React.Node =>
    this.state.error ? <ErrorMessage error={this.state.error} /> : null;

  render() {
    return (
      <Grid container justify="center" spacing={24}>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <PaperSheet headline="Ennusta alagrupimängude tulemusi">
            {this.maybeRenderError()}
            <h4>Iga õige tulemus annab kaks punkti</h4>
            {/*<UserPrediction />*/}
          </PaperSheet>
          <PaperSheet headline="Ennusta playoffide tulemusi">
            {this.maybeRenderError()}
            <PlayoffPrediction />
            {/*<h4>Iga õige kaheksandikfinalist 1p</h4>*/}
            {/*- Iga õige veerandfinalist 2p.*/}
            {/*- Iga õige poolfinalist 4p.*/}
            {/*- Iga õige finalist 6p.*/}
            {/*- Õige võitja 8p.*/}
          </PaperSheet>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRelayEnvironmentContext(Ennusta));
