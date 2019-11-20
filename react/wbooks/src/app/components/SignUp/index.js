import React, { Component } from 'react';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

import woloxLogoImage from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';
import ErrorMessages from '../ErrorMessages';
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

  onChangeField = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  render() {
    const { errorMessages, isError } = this.state;

    return (
      <div className={`${styles.container} column background-wild-sand`}>
        <img src={woloxLogoImage} alt="Wolox logo" className={styles.woloxLogoImage} />
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
        <Link className={`${styles.loginButton} full-width`} to={Routes.LOGIN}>
          {LOGIN}
        </Link>
        {isError && <ErrorMessages errorMessages={errorMessages} />}
      </div>
    );
  }
}

export default SignUp;
