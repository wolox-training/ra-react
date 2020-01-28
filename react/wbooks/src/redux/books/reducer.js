import Immutable from 'seamless-immutable';
import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions';
import { BOOKS, BOOK } from './constants';

const initialStateDescription = {
  [BOOKS]: [],
  [BOOK]: {}
};

const initialState = completeState(initialStateDescription, [BOOKS]);

const reducerDescription = {
  [actions.ADD_BOOKS]: (state, action) => ({ ...state, books: action.payload }),
  [actions.ADD_BOOK]: (state, action) => ({ ...state, book: action.payload }),
  [actions.REMOVE_BOOK]: (state, action) => ({ ...state, book: {} })
  // [actions.PABLITO]: (state, action) => ({ ...state, bookLoading: true })
};

const reducer = createReducer(new Immutable(initialState), reducerDescription);

export default reducer;

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case actions.ADD_BOOKS:
//       return { ...state, books: action.payload };
//     case actions.ADD_BOOK:
//       return { ...state, book: action.payload, bookObtained: true };
//     case actions.REMOVE_BOOK:
//       return { ...state, book: {}, bookObtained: false };
//     default:
//       return state;
//   }
// }
