import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { elementType } from 'prop-types';

import { ACCESS_TOKEN } from '../../../../constants';

function HybridRoute({ publicComponent: PublicComp, privateComponent: PrivateComp, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => {
        const userIsLogged = localStorage.getItem(ACCESS_TOKEN);
        return userIsLogged ? <PrivateComp {...routeProps} /> : <PublicComp {...routeProps} />;
      }}
    />
  );
}

HybridRoute.propTypes = {
  privateComponent: elementType.isRequired,
  publicComponent: elementType.isRequired
};

export default withRouter(HybridRoute);
