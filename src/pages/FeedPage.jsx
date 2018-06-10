// @flow

import * as React from "react";
import Grid from "material-ui/Grid";
import type { Disposable } from "react-relay";
import { ConnectionHandler } from "relay-runtime";

import PaperSheet from "../atoms/PaperSheet";

class FeedPage extends React.Component<FeedPageQuery> {
  renderFeed = () => (
    <Grid item xs={12} sm={8} md={6} lg={8} xl={4}>
      <PaperSheet headline="Event Feed" />
    </Grid>
  );

  render() {
    return (
      <Grid container justify="center">
        {this.renderFeed()}
      </Grid>
    );
  }
}

export default FeedPage;
