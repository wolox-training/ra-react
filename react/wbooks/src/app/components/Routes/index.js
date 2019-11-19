import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Routes } from '../../../constants';
import SignUp from '../SignUp';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.LOGIN} exact component={() => <p>Not implemented yet :D</p>} />
        <Route path={Routes.SIGN_UP} component={SignUp} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
