import { createStore, combineReducers, compose } from 'redux';

import books from './books/reducer';
import auth from './auth/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const reducer = combineReducers({
  auth,
  books
});

export default createStore(reducer, composeEnhancers());
