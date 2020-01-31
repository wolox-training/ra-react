import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { elementType, string } from 'prop-types';
import { connect } from 'react-redux';

function HybridRoute({ publicComponent: PublicComp, privateComponent: PrivateComp, accessToken, ...props }) {
  return (
    <Route
      {...props}
      render={routeProps => (accessToken ? <PrivateComp {...routeProps} /> : <PublicComp {...routeProps} />)}
    />
  );
}

HybridRoute.propTypes = {
  accessToken: string.isRequired,
  privateComponent: elementType.isRequired,
  publicComponent: elementType.isRequired
};

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken
});

export default connect(mapStateToProps)(withRouter(HybridRoute));
