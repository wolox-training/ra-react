import api from '../../app/config/api';

export const getBooks = async ({ author, genre, title, description } = {}) => {
  const response = await api.get('/books', { author, genre, title, description });

  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const getBook = bookId => api.get(`/books/${bookId}`);
