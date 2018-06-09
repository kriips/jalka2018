// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import { graphql } from "react-relay";

import PaperSheet from "../atoms/PaperSheet";
import withRelayData from "../services/withRelayData";

class HomePage extends React.Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6} lg={8} xl={4}>
          <PaperSheet headline="Jalgpalli MM 2018 ennustusvõistlus">
            <h1 />
            <p>Repart 5 eurot.</p>
            <p>Reeglid:</p>
            <ul>
              <li>Ennustamine lõpeb enne turniiri esimese mängu avavilet.</li>
              <li>Iga õige alagrupimängu tulemus annab 2p.</li>
              <li>Iga õige kaheksandikfinalist 1p.</li>
              <li>Iga õige veerandfinalist 2p.</li>
              <li>Iga õige poolfinalist 4p.</li>
              <li>Iga õige finalist 6p.</li>
              <li>Õige võitja 8p.</li>
            </ul>
            <p>
              Repart jaotatakse ära esikolmiku vahel vastavalt põhimõttele
              50:30:20.
            </p>
            <p>Repart kanda arvele: MARK-EERIK KODAR EE492200221064373219</p>
            <Button
              variant="raised"
              color="primary"
              component={Link}
              to="/ennusta"
            >
              Ennusta
            </Button>
          </PaperSheet>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
