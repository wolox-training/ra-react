import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Routes } from '../../../constants';
import SignUp from '../SignUp';
import Login from '../Login';
import Home from '../../screens/Home';
import BookDetail from '../BookDetail';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import HybridRoute from './components/HybridRoute';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <AuthenticatedRoute isPublicRoute path={Routes.SIGN_UP} component={SignUp} />
        <AuthenticatedRoute isPublicRoute path="/hola" component={BookDetail} />
        <HybridRoute exact path={Routes.LOGIN_AND_HOME} privateComponent={Home} publicComponent={Login} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
