import { createTypes, completeTypes, withSuccess } from 'redux-recompose';

import { getBooks, getBook } from '../../services/Book/service';

import { bookSerializer } from './serializers';
import { BOOKS, BOOK } from './constants';

export const actions = createTypes(
  completeTypes(['GET_BOOK', 'GET_BOOKS'], ['ADD_BOOKS', 'REMOVE_BOOK']),
  '@@BOOKS'
);

export const actionCreators = {
  addBooks: books => ({
    type: actions.ADD_BOOKS,
    target: BOOKS,
    payload: books
  }),
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: BOOKS,
    service: getBooks
    // successSelector: books => dispatch =>
    //   dispatch({ type: actions.ADD_BOOKS, payload: books, target: BOOKS }),
    // injections: [
    //   withSuccess((dispatch, books) => {
    //     console.log('oooooooooooooooooooooooo')
    //     dispatch(actionCreators.addBooks(books));
    //   })
    // ]
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
