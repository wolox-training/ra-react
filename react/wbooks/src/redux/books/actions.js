export const actions = {
  ADD_BOOKS: '@@BOOKS/ADD_BOOKS'
};

export default {
  addBooks: books => ({
    type: actions.ADD_BOOKS,
    payload: {
      books
    }
  })
};
