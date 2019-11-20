import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { ACCESS_TOKEN } from '../../../../constants';

function HybridRoute({ publicComponent: PublicComp, privateComponent: PrivateComp, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => {
        const userIsLogged = !localStorage.getItem(ACCESS_TOKEN);
        return userIsLogged ? <PrivateComp {...routeProps} /> : <PublicComp {...routeProps} />;
      }}
    />
  );
}

HybridRoute.propTypes = {
  ...Route.propTypes // eslint-disable-line react/forbid-foreign-prop-types
};

export default withRouter(HybridRoute);
