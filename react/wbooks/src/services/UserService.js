import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_USER_BASE_URL;

const api = create({
  baseURL,
  timeout: 15000
});

export const createUser = async ({ email, password, passwordConfirmation, name, lastname, locale }) => {
  const response = await api.post('/users', {
    user: {
      email,
      password,
      /* eslint-disable camelcase */
      password_confirmation: passwordConfirmation,
      first_name: name,
      last_name: lastname,
      /* eslint-enable camelcase */
      locale
    }
  });

  if (response.ok) {
    return response.data;
  }
  throw response;
};
