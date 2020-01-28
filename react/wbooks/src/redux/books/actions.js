import { createTypes, withSuccess, completeTypes } from 'redux-recompose';

import { getBooks, getBook } from '../../services/Book/service';
import {bookSerializer} from './serializers';
import { BOOKS, BOOK } from './constants';

const types = ['ADD_BOOKS', 'GET_BOOKS', 'ADD_BOOK', 'GET_BOOK', 'REMOVE_BOOK', 'PABLITO'];
export const actions = createTypes(
  completeTypes(['GET_BOOK'], ['ADD_BOOKS', 'GET_BOOKS', 'ADD_BOOK', 'REMOVE_BOOK']),
  '@@BOOKS'
);

export const actionCreators = {
  addBooks: books => ({
    type: actions.ADD_BOOKS,
    target: BOOKS,
    payload: books
  }),
  getBooks: () => async (dispatch, getState) => {
    const books = await getBooks(getState().auth.accessToken);
    dispatch(actionCreators.addBooks(books));
  },
  addBook: book => ({
    type: actions.ADD_BOOK,
    target: BOOK,
    payload: book
  }),
  getBook: bookId => ({
    type: actions.GET_BOOK,
    target: BOOK,
    service: getBook,
    payload: { bookId },
    successSelector: (response) => bookSerializer.serialize(response.data),
  }),
  // async (dispatch, getState) => {
  //   const book = await getBook(getState().auth.accessToken, bookId);
  //   dispatch(actionCreators.addBook(book));
  // },
  removeBook: () => ({
    type: actions.REMOVE_BOOK,
    target: BOOK
  })
};
