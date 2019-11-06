import { create } from 'apisauce';

const baseURL = process.env.USER_BASE_URL;

const api = create({
  baseURL,
  timeout: 15000
});

exports.createUser = ({ email, password, passwordConfirmation, firstName, lastName, locale }) =>
  api
    .post('/', {
      user: {
        email,
        password,
        /* eslint-disable camelcase */
        password_confirmation: passwordConfirmation,
        first_name: firstName,
        last_name: lastName,
        /* eslint-enable camelcase */
        locale
      }
    })
    .then(response => response.data);
