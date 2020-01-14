import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { elementType } from 'prop-types';

import store from '../../../../redux/store';

function HybridRoute({ publicComponent: PublicComp, privateComponent: PrivateComp, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => {
        const {
          auth: { accessToken }
        } = store.getState();
        return accessToken ? <PrivateComp {...routeProps} /> : <PublicComp {...routeProps} />;
      }}
    />
  );
}

HybridRoute.propTypes = {
  privateComponent: elementType.isRequired,
  publicComponent: elementType.isRequired
};

export default withRouter(HybridRoute);
