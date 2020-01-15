import { getBooks, getBook } from '../../services/Book/service';

export const actions = {
  ADD_BOOKS: '@@BOOKS/ADD_BOOKS',
  GET_BOOKS: '@@BOOKS/GET_BOOKS',
  ADD_BOOK: '@@BOOKS/ADD_BOOK',
  GET_BOOK: '@@BOOKS/GET_BOOK'
};

export default {
  addBooks: books => ({
    type: actions.ADD_BOOKS,
    payload: books
  }),
  getBooks: () => async (dispatch, getState) => {
    dispatch({ type: actions.GET_BOOKS });
    const books = await getBooks(getState().auth.accessToken);
    dispatch({
      type: actions.ADD_BOOKS,
      payload: books
    });
  },
  addBook: book => ({
    type: actions.ADD_BOOK,
    payload: book
  }),
  getBook: bookId => async (dispatch, getState) => {
    dispatch({ type: actions.GET_BOOKS });
    const book = await getBook(getState().auth.accessToken, bookId);
    dispatch({
      type: actions.ADD_BOOK,
      payload: book
    });
  }
};
