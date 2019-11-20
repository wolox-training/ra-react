import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Routes } from '../../../constants';
import SignUp from '../SignUp';
import Login from '../Login';
import NavBar from '../NavBar';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.LOGIN} exact component={Login} />
        <Route path={Routes.SIGN_UP} component={SignUp} />
        <Route path={Routes.HOME} component={NavBar} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
