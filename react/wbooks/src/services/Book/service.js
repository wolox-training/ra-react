import api from '../../app/config/api';

import { bookSerializer } from './serializers';

export const getBooks = async (token, { author, genre, title, description } = {}) => {
  api.setHeader('Authorization', token);
  const response = await api.get('/books', { author, genre, title, description });

  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const getBook = async (token, id) => {
  api.setHeader('Authorization', token);
  const response = await api.get(`/books/${id}`);

  if (response.ok) {
    const book = bookSerializer.serialize(response.data);
    return book;
  }
  throw response;
};
