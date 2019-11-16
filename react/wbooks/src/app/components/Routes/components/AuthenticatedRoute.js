import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { bool } from 'prop-types';
import { get } from 'local-storage';

import { isNull } from '../../../../utils/helpers';
import { Routes, ACCESS_TOKEN } from '../../../../constants';

const DEFAULT_PUBLIC_ROUTE = Routes.LOGIN_AND_HOME;
const DEFAULT_PRIVATE_ROUTE = Routes.LOGIN_AND_HOME;

function AuthenticatedRoute({ isPublicRoute, component: Comp, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => {
        const userIsLogged = !isNull(get(ACCESS_TOKEN));
        if (isPublicRoute && userIsLogged) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PRIVATE_ROUTE,
                state: { from: props.location }
              }}
            />
          );
        } else if (!isPublicRoute && !userIsLogged) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PUBLIC_ROUTE,
                state: { from: props.location }
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
  ...Route.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
  isPublicRoute: bool
};

export default withRouter(AuthenticatedRoute);
