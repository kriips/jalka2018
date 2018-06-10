// @flow

import * as React from "react";
import Grid from "material-ui/Grid";
import type { Disposable } from "react-relay";
import { ConnectionHandler } from "relay-runtime";

import { TopList } from "../organisms/TopList";
import PaperSheet from "../atoms/PaperSheet";

class Edetabel extends React.Component<FeedPageQuery> {
  renderTopList = () => (
    <Grid item xs={12} sm={8} md={6} lg={8} xl={4}>
      <PaperSheet headline="Edetabel">
        <TopList />
      </PaperSheet>
    </Grid>
  );

  render() {
    return (
      <Grid container justify="center">
        {this.renderTopList()}
      </Grid>
    );
  }
}

export default Edetabel;
