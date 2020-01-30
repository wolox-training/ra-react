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

HybridRoute.defaultProps = {
  accessToken: ''
};

HybridRoute.propTypes = {
  privateComponent: elementType.isRequired,
  publicComponent: elementType.isRequired,
  accessToken: string
};

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken
});

export default connect(mapStateToProps, null)(withRouter(HybridRoute));
