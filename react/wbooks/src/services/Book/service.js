import api from '../../app/config/api';

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
    return response.data;
  }
  throw response;
};
