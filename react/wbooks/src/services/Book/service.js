import api from '../../app/config/api';

export const getBooks = ({ author, genre, title, description } = {}) =>
  api.get('/books', { author, genre, title, description });

export const getBook = bookId => api.get(`/books/${bookId}`);
