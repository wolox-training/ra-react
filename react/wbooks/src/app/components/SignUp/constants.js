import { fieldRequired, passwordFormat, emailFormat } from './validations';

export const FIELDS = {
  name: {
    validations: [fieldRequired]
  },
  lastname: {
    validations: [fieldRequired]
  },
  email: {
    label: 'Email',
    validations: [fieldRequired, emailFormat]
  },
  password: {
    inputType: 'password',
    label: 'Password',
    validations: [fieldRequired, passwordFormat]
  },
  passwordConfirmation: {
    inputType: 'password',
    validations: [fieldRequired]
  }
};
export const LOGIN = 'Login';
export const SIGN_UP = 'Sign Up';
export const EN = 'EN';
export const ES = 'ES';
