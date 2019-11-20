import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { bool, string, elementType } from 'prop-types';

import { Routes, ACCESS_TOKEN } from '../../../../constants';

const DEFAULT_PUBLIC_ROUTE = Routes.LOGIN_AND_HOME;
const DEFAULT_PRIVATE_ROUTE = Routes.LOGIN_AND_HOME;

function AuthenticatedRoute({ isPublicRoute, component: Comp, location, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => {
        const userIsLogged = localStorage.getItem(ACCESS_TOKEN);
        if (isPublicRoute && userIsLogged) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PRIVATE_ROUTE,
                state: { from: location }
              }}
            />
          );
        } else if (!isPublicRoute && !userIsLogged) {
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
