import api from '../../app/config/api';

import { bookSerializer } from './serializers';

export const getBooks = async (accessToken, { author, genre, title, description } = {}) => {
  // api.setHeader('Authorization', accessToken);
  const response = await api.get('/books', { author, genre, title, description });

  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const getBook = async ({ bookId, accessToken }) => {
  // api.setHeader('Authorization', accessToken);
  console.log('FUUCK');
  return api.get(`/books/${bookId}`);

  // if (response.ok) {
  //   const book = bookSerializer.serialize(response.data);
  //   return book;
  // }
  // throw response;
};
