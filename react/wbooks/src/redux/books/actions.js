import { createTypes, completeTypes } from 'redux-recompose';

import { getBooks, getBook } from '../../services/Book/service';

import { bookSerializer } from './serializers';
import { BOOKS, BOOK } from './constants';

export const actions = createTypes(completeTypes(['GET_BOOK', 'GET_BOOKS'], ['REMOVE_BOOK']), '@@BOOKS');

export const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: BOOKS,
    service: getBooks,
    successSelector: response => response.data
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
