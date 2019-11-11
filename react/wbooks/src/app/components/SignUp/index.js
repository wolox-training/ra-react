import React, { Component } from 'react';
import { t } from 'i18next';
import { get } from 'lodash';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP, FIELDS, FIELDS_DATA } from './constants';

class SignUp extends Component {
  handleSignUp = () => {
    const { email, password, passwordConfirmation, name, lastname } = this.state;

    console.log({
      user: {
        email,
        password,
        /* eslint-disable camelcase */
        password_confirmation: passwordConfirmation,
        first_name: name,
        last_name: lastname,
        /* eslint-enable camelcase */
        locale: 'en'
      }
    });
  };

  onChangeField = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  render() {
    return (
      <div className={`${styles.container} column background-wild-sand`}>
        <img src={imagePlaceholder} alt="Wolox logo" className={styles.woloxLogoImage} />
        <form onSubmit={this.handleSignUp} className={`${styles.signUpForm} m-bottom-3`}>
          {FIELDS.map(field => (
            <InputLabel
              key={field}
              textClassName={`${styles.inputLabel} m-top-3`}
              dataFor={field}
              label={get(FIELDS_DATA[field], 'label') || t(`SignUp:${field}`)}
              inputClassName={`${styles.input} full-width`}
              name={field}
              inputId={field}
              handleChange={this.onChangeField}
              inputType={get(FIELDS_DATA[field], 'inputType')}
            />
          ))}
          <button type="submit" className={`${styles.signUpButton} full-width m-top-4`}>
            {SIGN_UP}
          </button>
        </form>
        <button type="button" className={`${styles.loginButton} full-width`}>
          {LOGIN}
        </button>
      </div>
    );
  }
}

export default SignUp;
