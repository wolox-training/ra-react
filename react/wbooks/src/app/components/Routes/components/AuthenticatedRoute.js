import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { bool, string, elementType } from 'prop-types';

import { Routes } from '../../../../constants';
import store from '../../../../redux/store';

const DEFAULT_PUBLIC_ROUTE = Routes.LOGIN_AND_HOME;
const DEFAULT_PRIVATE_ROUTE = Routes.LOGIN_AND_HOME;

function AuthenticatedRoute({ isPublicRoute, component: Comp, location, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => {
        const {
          auth: { accessToken }
        } = store.getState();
        if (isPublicRoute && accessToken) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PRIVATE_ROUTE,
                state: { from: location }
              }}
            />
          );
        } else if (!isPublicRoute && !accessToken) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PUBLIC_ROUTE,
                state: { from: location }
              }}
            />
          );
        }

        return <Comp {...routeProps} />;
      }}
    />
  );
}

AuthenticatedRoute.defaultProps = {
  isPublicRoute: false
};

AuthenticatedRoute.propTypes = {
  component: elementType.isRequired,
  location: string.isRequired,
  isPublicRoute: bool
};

export default withRouter(AuthenticatedRoute);
