import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: [],
  booksQuantity: {}
};

function reducer(state = initialState, action) {
  const { payload, type } = action;
  let newBooksQuantity = {};
  switch (type) {
    case actions.GET_BOOKS:
      payload.forEach(book => {
        if (!(book.id in state.booksQuantity)) {
          newBooksQuantity = { ...newBooksQuantity, [book.id]: 1 };
        }
      });
      return {
        ...state,
        books: payload,
        originalData: payload,
        booksQuantity: { ...state.booksQuantity, ...newBooksQuantity }
      };
    case actions.ADD_TO_CART:
      return { ...state, bookSelected: [...state.bookSelected, payload] };
    case actions.ADD_ITEM:
      return {
        ...state,
        booksQuantity: { ...state.booksQuantity, [payload]: (state.booksQuantity[payload] += 1) }
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        booksQuantity: { ...state.booksQuantity, [payload]: 1 },
        bookSelected: state.bookSelected.filter(book => book.id !== payload)
      };
    case actions.SEARCH_ITEM:
      return {
        ...state,
        books: state.originalData.filter(book => book.name.toLowerCase().indexOf(payload.toLowerCase()) > -1)
      };
    default:
      return state;
  }
}

export default reducer;
