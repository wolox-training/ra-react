import { getBooks } from '../../services/Book/service';

export const actions = {
  ADD_BOOKS: '@@BOOKS/ADD_BOOKS',
  GET_BOOKS: '@@BOOKS/GET_BOOKS'
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
  }
};
