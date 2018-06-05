// @flow

import * as React from "react";
import Button from "material-ui/Button";
import Delete from "@material-ui/icons/Delete";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";
import ListItem from "material-ui/List/ListItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import FormControl from "material-ui/Form/FormControl";
import Collapse from "material-ui/transitions/Collapse";
import ListItemText from "material-ui/List/ListItemText";

import { createFragmentContainer, graphql } from "react-relay";
// import releasePokemon from "../services/releasePokemon";
import type { ContextType } from "../services/withRelayEnvironmentContext";
import withRelayEnvironmentContext from "../services/withRelayEnvironmentContext";
import ErrorMessage from "../atoms/ErrorMessage";
// import PokemonImage from "../atoms/PokemonImage";

import MatchRow_match from "./__generated__/MatchRow_match";

type PropsType = ContextType & {
  match: MatchRow_match,
  // classes: {
  //   released: string,
  // },
};

type MatchType = {
  id: string,
  name: string,
  group: string,
  homeTeam: number,
  awayTeam: number,
  date: { iso8601: string },
};

type StateType = {
  collapsed: boolean,
  comment: string,
  error: ?Error,
  processing: boolean,
};

const styles = () => ({
  released: {
    opacity: 0.5,
  },
});

class MatchRow extends React.Component<PropsType, StateType> {
  state = {
    collapsed: true,
    comment: "",
    processing: false,
    error: null,
  };

  // getClassName = (): string =>
  //   this.props.pokemon.releasedAt ? this.props.classes.released : "";

  handleCommentChange = (event: Object) =>
    this.setState({ comment: event.target.value });

  handleSubmit = (event: Object) => {
    event.preventDefault();
    this.setState(
      {
        error: null,
        processing: true,
      },
      () =>
        releasePokemon(
          {
            pokemonId: this.props.pokemon.id,
            comment: this.state.comment,
          },
          this.props.environment,
        )
          .then(this.handleSuccess)
          .catch(this.handleError),
    );
  };

  handleSuccess = () =>
    this.setState({ processing: false, error: null, collapsed: true });

  handleError = (error: Error) =>
    this.setState({
      processing: false,
      error,
    });

  maybeRenderError = (): ?React.Node =>
    this.state.error ? <ErrorMessage error={this.state.error} /> : null;

  // renderAvatar = (species: SpeciesType): ?React.Node =>
  //   species.imageUrl ? (
  //     <PokemonImage alt={species.name} src={species.imageUrl} />
  //   ) : null;

  handleToggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  maybeRenderCollapsible() {
    if (this.props.pokemon.releasedAt) {
      return null;
    }

    return (
      <Collapse in={!this.state.collapsed} timeout="auto" unmountOnExit>
        {this.maybeRenderError()}
        <form onSubmit={this.handleSubmit}>
          <FormControl fullWidth margin="dense">
            <TextField
              label="Comment"
              onChange={this.handleCommentChange}
              value={this.state.comment}
              disabled={this.state.processing}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <Button
              size="large"
              type="submit"
              variant="raised"
              color="secondary"
              onClick={this.handleSubmit}
              disabled={this.state.processing}
            >
              Release
            </Button>
          </FormControl>
        </form>
      </Collapse>
    );
  }

  maybeRenderAccordionButton = () => {
    if (this.props.pokemon.releasedAt) {
      return null;
    }

    if (this.state.collapsed) {
      return <Delete onClick={this.handleToggle} />;
    }

    return <ExpandLess onClick={this.handleToggle} />;
  };

  render() {
    const { match } = this.props;

    // const caughtAtText = new Date(pokemon.caughtAt.iso8601).toLocaleString();
    //
    // let secondaryText = `${pokemon.weight} kg, ${
    //   pokemon.height
    // } cm, caught ${caughtAtText}`;
    //
    // if (pokemon.releasedAt) {
    //   const releasedAtText = new Date(
    //     pokemon.releasedAt.iso8601,
    //   ).toLocaleString();
    //   secondaryText += `, released ${releasedAtText}`;
    //
    //   if (pokemon.releaseComment) {
    //     secondaryText += ` (${pokemon.releaseComment})`;
    //   }
    // }

    return (
      // $FlowFixMe <3
      <React.Fragment>
        <ListItem
          disableGutters
          key={match.id}
          // className={this.getClassName()}
        >
          {/*{this.renderAvatar(pokemon.species)}*/}
          <ListItemText
            primary={match.name}
            // secondary={secondaryText}
          />
          {/*{this.maybeRenderAccordionButton()}*/}
        </ListItem>
        {/*{this.maybeRenderCollapsible()}*/}
      </React.Fragment>
    );
  }
}

export default createFragmentContainer(
  withRelayEnvironmentContext(withStyles(styles)(MatchRow)),
  {
    match: graphql`
      fragment MatchRow_match on Match {
        id
        group
        date {
          iso8601
        }
        homeTeam
        awayTeam
        name
      }
    `,
  },
);
