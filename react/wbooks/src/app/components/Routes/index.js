import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Routes } from '../../../constants';
import SignUp from '../SignUp';
import Login from '../Login';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.LOGIN} exact component={Login} />
        <Route path={Routes.SIGN_UP} component={SignUp} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
