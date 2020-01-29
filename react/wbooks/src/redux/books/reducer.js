import Immutable from 'seamless-immutable';
import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions';
import { BOOKS, BOOK } from './constants';

const initialStateDescription = {
  [BOOKS]: [],
  [BOOK]: {}
};

const initialState = completeState(initialStateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_BOOK, actions.GET_BOOKS],
  override: {
    [actions.ADD_BOOKS]: (state, action) => {
      console.log('bbbbbbbbbbbbbbbbbbbbbb');
      return { ...state, books: action.payload };
    },
    [actions.REMOVE_BOOK]: state => ({ ...state, book: {} })
  }
};

const reducer = createReducer(new Immutable(initialState), completeReducer(reducerDescription));

export default reducer;
