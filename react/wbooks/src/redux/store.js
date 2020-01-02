import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import books from './books/reducer';
import auth from './auth/reducer';

const middlewares = [thunk];
const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const reducer = combineReducers({
  auth,
  books
});

export default createStore(reducer, composeEnhancers(...enhancers));
