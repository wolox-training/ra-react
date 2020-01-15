import { actions } from './actions';

const initialState = {
  books: [],
  book: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_BOOKS:
      return { ...state, books: action.payload };
    case actions.ADD_BOOK:
      return { ...state, book: action.payload };
    default:
      return state;
  }
}

export default reducer;
