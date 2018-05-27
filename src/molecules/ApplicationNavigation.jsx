// @flow

import * as React from "react";
import { graphql } from "react-relay";
import Home from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";
import ImportExport from "@material-ui/icons/ImportExport";
import Casino from "@material-ui/icons/Casino";
import type { ContextRouter } from "react-router-dom";
import BottomNavigation from "material-ui/BottomNavigation";
import BottomNavigationAction from "material-ui/BottomNavigation/BottomNavigationAction";

import SimpleButton from "../atoms/SimpleButton";
import withRelayData from "../services/withRelayData";

const routes = [
  { href: "/", icon: Home, label: "Koju" },
  { href: "/ennusta", icon: Casino, label: "Ennusta" },
  { href: "/edetabel", icon: ImportExport, label: "Edetabel" },
];

const query = graphql`
  query ApplicationNavigationQuery {
    me {
      id
    }
  }
`;

const NavigationButtons = (props: ContextRouter) => (
  // $FlowFixMe: Flow thinks React does not export Fragment. I don't care what it thinks.
  <React.Fragment>
    {routes.map(({ icon, label, href }) => (
      <SimpleButton
        key={label}
        IconComponent={icon}
        onClick={() => props.history.push(href)}
      >
        {label}
      </SimpleButton>
    ))}
  </React.Fragment>
);

const NavigationButtonsWithRouter = withRouter(NavigationButtons);

const AuthenticatedNavigationButtons = withRelayData(
  (props: Object) =>
    props.me ? <NavigationButtonsWithRouter {...props} /> : null,
  query,
  null,
  { renderLoading: false },
);

const BottomNavigationButtons = (
  props: ContextRouter & {
    className?: string,
  },
) => (
  <BottomNavigation
    className={props.className}
    onChange={(event, value) => props.history.push(value)}
    value={props.location.pathname}
  >
    {routes.map(({ icon: Icon, label, href }) => (
      <BottomNavigationAction
        key={label}
        value={href}
        label={label}
        icon={<Icon />}
      />
    ))}
  </BottomNavigation>
);

const AuthenticatedBottomNavigationButtons = withRelayData(
  (props: Object) => (props.me ? <BottomNavigationButtons {...props} /> : null),
  query,
  null,
  { renderLoading: false },
);

const AuthenticatedBottomNavigationButtonsWithRouter = withRouter(
  AuthenticatedBottomNavigationButtons,
);

export {
  AuthenticatedBottomNavigationButtonsWithRouter as BottomNavigation,
  AuthenticatedNavigationButtons as SimpleButtons,
  routes,
};
