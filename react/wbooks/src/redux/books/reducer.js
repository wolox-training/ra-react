import { actions } from './actions';

const initialState = {
  books: [],
  book: {},
  bookObtained: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_BOOKS:
      return { ...state, books: action.payload };
    case actions.ADD_BOOK:
      return { ...state, book: action.payload, bookObtained: true };
    case actions.REMOVE_BOOK:
      return { ...state, book: {}, bookObtained: false };
    default:
      return state;
  }
}

export default reducer;
