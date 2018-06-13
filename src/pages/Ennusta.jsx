// @flow

import * as React from "react";
import Grid from "material-ui/Grid";

import type { ContextRouter } from "react-router-dom";
import { withStyles } from "material-ui/styles";

import PaperSheet from "../atoms/PaperSheet";
import ErrorMessage from "../atoms/ErrorMessage";
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

class Ennusta extends React.Component {
  render() {
    return (
      <Grid container justify="center" spacing={24}>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <PaperSheet headline="Ennustamine on lõppenud">
            <h4>Iga õige tulemus annab kaks punkti</h4>
            <UserPrediction />
          </PaperSheet>
          <PaperSheet headline="Ennusta playoffide tulemusi">
            <PlayoffPrediction />
          </PaperSheet>
        </Grid>
      </Grid>
    );
  }
}

export default withRelayEnvironmentContext(Ennusta);
