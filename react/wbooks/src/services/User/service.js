import { serializer } from './serializers';

import api from '../app/config/api';

export const createUser = async ({ email, password, passwordConfirmation, name, lastname, locale }) => {
  const body = {
    user: {
      email,
      password,
      passwordConfirmation,
      name,
      lastname,
      locale
    }
  };

  const response = await api.post('/users', serializer.serialize(body));

  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const login = async ({ email, password }) => {
  const response = await api.post('/users/sessions', {
    session: {
      email,
      password
    }
  });

  if (response.ok) {
    return response.data;
  }
  throw response;
};
