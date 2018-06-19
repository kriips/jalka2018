// @flow

import React, { PureComponent } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { colorPallet } from "material-icons-react";
import MaterialIcon from "material-icons-react";
import groupBy from "lodash/groupBy";
import keys from "lodash/keys";
import forEach from "lodash/forEach";

export class PredictionDetails extends React.PureComponent<{}> {
  state = {
    tabIndex: "0",
  };

  getPredIcon = prediction => {
    if (prediction.homeResult === null) {
      return;
    } else if (
      (prediction.homeResult === prediction.awayResult &&
        prediction.prediction === "Viik") ||
      (prediction.homeResult > prediction.awayResult &&
        prediction.prediction === prediction.homeName) ||
      (prediction.homeResult < prediction.awayResult &&
        prediction.prediction === prediction.awayName)
    ) {
      return <MaterialIcon icon="done" color={colorPallet.green._200} />;
    } else {
      return <MaterialIcon icon="clear" color={colorPallet.red._200} />;
    }
  };

  sortMatches = preds => {
    return preds.sort((a, b) => {
      return a.matchName - b.matchName;
    });
  };

  renderGroups = () => {
    let groupPreds = [];
    let flatMatches = this.props.user.groupPredictions.map(pred => {
      return {
        matchId: pred.match.id,
        matchName: pred.match.name,
        homeEmoji: pred.match.homeTeam.emojiString,
        awayEmoji: pred.match.awayTeam.emojiString,
        homeName: pred.match.homeTeam.name,
        awayName: pred.match.awayTeam.name,
        homeResult: pred.match.homeResult,
        awayResult: pred.match.awayResult,
        prediction: pred.prediction,
      };
    });
    let sortedPreds = this.sortMatches(flatMatches);

    sortedPreds.forEach(pred => {
      groupPreds.push(
        <ListItem key={pred.matchId} dense>
          <ListItemText>
            <span>
              {pred.matchName}. {pred.homeEmoji} {pred.homeName}{" "}
              {pred.homeResult !== null ? pred.homeResult : ""} -{" "}
              {pred.awayResult !== null ? pred.awayResult : ""} {pred.awayName}{" "}
              {pred.awayEmoji}: {pred.prediction}
            </span>
            {this.getPredIcon(pred)}
          </ListItemText>
        </ListItem>,
      );
    });
    return groupPreds;
  };

  phaseTeams = preds => {
    var predElements = [];
    preds.forEach(pred => {
      predElements.push(
        <div>
          {pred.team.emojiString} {pred.team.name}
        </div>,
      );
    });
    return predElements;
  };

  renderPlayoffs = () => {
    let phases = groupBy(this.props.user.playoffPredictions, prediction => {
      return prediction.phase;
    });
    let phaseKeys = keys(phases).sort((a, b) => b - a);
    let phaseElements = [];
    forEach(phaseKeys, phaseKey => {
      phaseElements.push(
        <ListItem dense>
          <ListItemText>
            <Typography variant="subheading" gutterBottom>
              1/{phaseKey}:
              {this.phaseTeams(phases[phaseKey])}
            </Typography>
          </ListItemText>
        </ListItem>,
      );
    });
    return phaseElements;
  };

  handleTabChange = (event, value) => {
    this.setState({ tabIndex: value });
  };

  render() {
    return (
      <div>
        <Tabs value={this.state.tabIndex} onChange={this.handleTabChange}>
          <Tab value="0" label="Grupimängud" />
          <Tab value="1" label="Playoffid" />
        </Tabs>
        {this.state.tabIndex === "0" && (
          <List
            dense
            style={{
              minHeight: "70vh",
              maxHeight: "70vh",
              width: "70vw",
              overflow: "auto",
            }}
          >
            {this.renderGroups()}
          </List>
        )}
        {this.state.tabIndex === "1" && (
          <List
            dense
            style={{
              minHeight: "70vh",
              maxHeight: "70vh",
              width: "70vw",
              overflow: "auto",
            }}
          >
            {this.renderPlayoffs()}
          </List>
        )}
      </div>
    );
  }
}
