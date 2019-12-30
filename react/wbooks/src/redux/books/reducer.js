import { actions } from './actions';

const initialState = {
  books: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_BOOKS:
      return { ...state, books: action.payload.books };
    default:
      return state;
  }
}

export default reducer;
