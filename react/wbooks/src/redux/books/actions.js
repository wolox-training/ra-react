import { createTypes, completeTypes } from 'redux-recompose';

import { getBooks, getBook } from '../../services/Book/service';

import { bookSerializer } from './serializers';
import { BOOKS, BOOK } from './constants';

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
  getBooks: () => async dispatch => {
    const books = await getBooks();
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
    payload: bookId,
    successSelector: response => bookSerializer.serialize(response.data)
  }),
  removeBook: () => ({
    type: actions.REMOVE_BOOK,
    target: BOOK
  })
};
