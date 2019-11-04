import React, { Component } from 'react';
import { t } from 'i18next';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';

import styles from './styles.module.scss';

class SignUp extends Component {
  handleSignUp = () => {
    console.log({
      user: {
        email: this.state.email,
        password: this.state.password,
        /* eslint-disable camelcase */
        password_confirmation: this.state.passwordConfirmation,
        first_name: this.state.name,
        last_name: this.state.lastname,
        /* eslint-enable camelcase */
        locale: 'en'
      }
    });
  };

  onChangeName = name => {
    this.setState({ name });
  };

  onChangeLastname = lastname => {
    this.setState({ lastname });
  };

  onChangePassword = password => {
    this.setState({ password });
  };

  onChangeEmail = email => {
    this.setState({ email });
  };

  onChangePasswordConfirmation = passwordConfirmation => {
    this.setState({ passwordConfirmation });
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
            inputType="text"
            handleChange={this.onChangeName}
          />
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="lastname"
            label={t('SignUp:lastname')}
            inputClassName={`${styles.input} full-width`}
            name="lastname"
            inputId="lastname"
            inputType="text"
            handleChange={this.onChangeLastname}
          />
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="email"
            label="Email"
            inputClassName={`${styles.input} full-width`}
            name="email"
            inputId="email"
            inputType="text"
            handleChange={this.onChangeEmail}
          />
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="password"
            label="Password"
            inputClassName={`${styles.input} full-width`}
            name="password"
            inputId="password"
            inputType="password"
            handleChange={this.onChangePassword}
          />
          <InputLabel
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor="passwordConfirmation"
            label={t('SignUp:passwordConfirmation')}
            inputClassName={`${styles.input} full-width`}
            name="passwordConfirmation"
            inputId="passwordConfirmation"
            inputType="password"
            handleChange={this.onChangePasswordConfirmation}
          />
          <button type="submit" className={`${styles.signUpButton} full-width m-top-4`}>
            Sign Up
          </button>
        </form>
        <button type="button" className={`${styles.loginButton} full-width`}>
          Login
        </button>
      </div>
    );
  }
}

export default SignUp;
