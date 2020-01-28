import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { Routes } from '../../../constants';
import SignUp from '../SignUp';
import Login from '../Login';
import Home from '../../screens/Home';
import BookDetail from '../BookDetail';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import HybridRoute from './components/HybridRoute';
import actionCreators from 'redux/auth/actions';

function AppRoutes() {
  const dispatch = useDispatch();
  dispatch(actionCreators.checkAuth());
  return (
    <Router>
      <Switch>
        <AuthenticatedRoute isPublicRoute path={Routes.SIGN_UP} component={SignUp} />
        <AuthenticatedRoute isPublicRoute={false} path={Routes.BOOK_DETAIL} component={BookDetail} />
        <HybridRoute exact path={Routes.LOGIN_AND_HOME} privateComponent={Home} publicComponent={Login} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
