import React, { Component } from 'react';
import { t } from 'i18next';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP } from './constants';

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
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="name"
            label={t('SignUp:name')}
            inputClassName={`${styles.input} full-width`}
            name="name"
            inputId="name"
            handleChange={this.onChangeField}
          />
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="lastname"
            label={t('SignUp:lastname')}
            inputClassName={`${styles.input} full-width`}
            name="lastname"
            inputId="lastname"
            handleChange={this.onChangeField}
          />
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="email"
            label="Email"
            inputClassName={`${styles.input} full-width`}
            name="email"
            inputId="email"
            handleChange={this.onChangeField}
          />
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="password"
            label="Password"
            inputClassName={`${styles.input} full-width`}
            name="password"
            inputId="password"
            inputType="password"
            handleChange={this.onChangeField}
          />
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="passwordConfirmation"
            label={t('SignUp:passwordConfirmation')}
            inputClassName={`${styles.input} full-width`}
            name="passwordConfirmation"
            inputId="passwordConfirmation"
            inputType="password"
            handleChange={this.onChangeField}
          />
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
