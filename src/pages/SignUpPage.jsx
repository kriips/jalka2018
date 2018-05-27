// @flow

import * as React from "react";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import InputLabel from "material-ui/Input/InputLabel";
import type { ContextRouter } from "react-router-dom";
import FormControl from "material-ui/Form/FormControl";
import FormHelperText from "material-ui/Form/FormHelperText";

import LinkButton from "../atoms/LinkButton";
import PaperSheet from "../atoms/PaperSheet";
import ErrorMessage from "../atoms/ErrorMessage";
import PasswordInput from "../atoms/PasswordInput";
import signUp, { MutationError } from "../services/signUp";
import type { ContextType } from "../services/withRelayEnvironmentContext";
import withRelayEnvironmentContext from "../services/withRelayEnvironmentContext";

type PropsType = ContextRouter & ContextType;

type StateType = {
  error: ?Error,
  username: string,
  password: string,
  processing: boolean,
};

class SignUpPage extends React.Component<PropsType, StateType> {
  state = { username: "", password: "", processing: false, error: null };

  handleSubmit = (event: Object) => {
    event.preventDefault();
    this.setState(
      {
        error: null,
        processing: false,
      },
      () =>
        signUp(
          {
            username: this.state.username,
            password: this.state.password,
          },
          this.props.environment,
        )
          .then(this.handleSuccess)
          .catch(this.handleError),
    );
  };

  handleSuccess = () => {
    // For now we'll redirect to sign in page, but we could also
    // fire off a sign in mutation right away to sign the user in.
    this.props.history.push("/sign_in");
  };

  handleError = (error: Error) =>
    this.setState({
      processing: false,
      error,
    });

  handleUsernameChange = (event: Object) =>
    this.setState({ username: event.target.value });
  handlePasswordChange = (password: string) => this.setState({ password });

  maybeRenderError = (): ?React.Node =>
    this.state.error ? <ErrorMessage error={this.state.error} /> : null;

  render() {
    let fieldsErrors = {};
    if (this.state.error instanceof MutationError && this.state.error.errors) {
      fieldsErrors = this.state.error.errors.reduce(
        (acc, error) => ({ ...acc, [error.field]: error.message }),
        {},
      );
    }

    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
          <PaperSheet headline="Registeeru">
            {this.maybeRenderError()}
            <FormControl fullWidth margin="dense">
              <TextField
                label="Nimi"
                error={!!fieldsErrors.username}
                disabled={this.state.processing}
                helperText={fieldsErrors.username}
                onChange={this.handleUsernameChange}
              />
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel error={!!fieldsErrors.password} htmlFor="password">
                Parool
              </InputLabel>
              <PasswordInput
                id="password"
                value={this.state.password}
                error={!!fieldsErrors.password}
                disabled={this.state.processing}
                onChange={this.handlePasswordChange}
              />
              {fieldsErrors.password ? (
                <FormHelperText error>{fieldsErrors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <Button
                size="large"
                variant="raised"
                color="secondary"
                onClick={this.handleSubmit}
                disabled={this.state.processing}
              >
                Registreeru
              </Button>
            </FormControl>
            <Grid item>
              <LinkButton size="small" color="secondary" href="/sign_in">
                Sisene
              </LinkButton>
            </Grid>
          </PaperSheet>
        </Grid>
      </Grid>
    );
  }
}

export default withRelayEnvironmentContext(SignUpPage);
