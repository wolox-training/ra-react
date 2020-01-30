import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { bool, elementType, string } from 'prop-types';
import { connect } from 'react-redux';

import { Routes } from '../../../../constants';

const DEFAULT_PUBLIC_ROUTE = Routes.LOGIN_AND_HOME;
const DEFAULT_PRIVATE_ROUTE = Routes.LOGIN_AND_HOME;

function AuthenticatedRoute({ isPublicRoute, component: Comp, accessToken, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => {
        if (isPublicRoute && accessToken) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PRIVATE_ROUTE
              }}
            />
          );
        } else if (!isPublicRoute && !accessToken) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PUBLIC_ROUTE
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
  accessToken: '',
  isPublicRoute: false
};

AuthenticatedRoute.propTypes = {
  component: elementType.isRequired,
  accessToken: string,
  isPublicRoute: bool
};

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken
});

export default connect(mapStateToProps, null)(withRouter(AuthenticatedRoute));
