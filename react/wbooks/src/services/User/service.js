import { create } from 'apisauce';

import { serializer } from './serializers';

const baseURL = process.env.REACT_APP_USER_BASE_URL;

const api = create({
  baseURL,
  timeout: 15000
});

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
  console.log(response);

  if (response.ok) {
    return response.data;
  }
  throw response;
};
