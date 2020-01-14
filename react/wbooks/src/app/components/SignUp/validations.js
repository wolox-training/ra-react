// TODO i18n for these errors messages
import { required, email } from 'redux-form-validators';

export const fieldRequired = required({ msg: 'Required' });

export const passwordFormat = password =>
  password.match(/^(?=.*\d)(?=.*[A-Za-z])[0-9a-zA-Z]{8,}$/)
    ? undefined
    : 'Password must contain minimum eight characters, at least one letter and one number';

export const emailFormat = email({ msg: 'Invalid email' });
