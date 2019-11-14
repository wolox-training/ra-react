import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Routes } from '../../../constants';
import SignUp from '../SignUp';
import Login from '../Login';
import NavBar from '../NavBar';

import AuthenticatedRoute from './components/AuthenticatedRoute';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <AuthenticatedRoute isPublicRoute path={Routes.SIGN_UP} component={SignUp} />
        <AuthenticatedRoute isPublicRoute exact path={Routes.LOGIN} component={Login} />
        <AuthenticatedRoute isPublicRoute={false} path={Routes.HOME} component={NavBar} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
