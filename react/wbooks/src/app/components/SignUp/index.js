import React, { Component } from 'react';
import { t } from 'i18next';
import { object, objectOf } from 'prop-types';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';
import { createUser } from '../../../services/User/service';
import { Routes } from '../../../constants';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP, FIELDS } from './constants';

class SignUp extends Component {
  state = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMessages: []
  };

  handleSignUp = async event => {
    event.preventDefault();
    try {
      const response = await createUser({ ...this.state, locale: 'en' }); // eslint-disable-line no-unused-vars
      this.setState({ isError: false, errorMessages: [] });
    } catch (error) {
      this.setState({ isError: true, errorMessages: error.data.error });
    }
  };

  handleLogin = () => this.props.history.push(Routes.LOGIN);

  onChangeField = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  render() {
    return (
      <div className={`${styles.container} column background-wild-sand`}>
        <img src={imagePlaceholder} alt="Wolox logo" className={styles.woloxLogoImage} />
        <form onSubmit={this.handleSignUp} className={`${styles.signUpForm} m-bottom-3`}>
          {Object.keys(FIELDS).map(field => (
            <InputLabel
              key={field}
              textClassName={`${styles.inputLabel} m-top-3`}
              dataFor={field}
              label={FIELDS[field].label || t(`SignUp:${field}`)}
              inputClassName={`${styles.input} full-width`}
              name={field}
              inputId={field}
              handleChange={this.onChangeField}
              inputType={FIELDS[field].inputType}
            />
          ))}
          <button type="submit" className={`${styles.signUpButton} full-width m-top-4`}>
            {SIGN_UP}
          </button>
        </form>
        <button type="button" onClick={this.handleLogin} className={`${styles.loginButton} full-width`}>
          {LOGIN}
        </button>
        {this.state.isError && (
          <div className={styles.errorsContainer}>
            {this.state.errorMessages.map(error => (
              <div className={`${styles.error} full-width`} key={error}>
                {error}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

SignUp.propTypes = {
  history: objectOf(object)
};

export default SignUp;
