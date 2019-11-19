import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';
import ErrorMessages from '../ErrorMessages';
import { login } from '../../../services/User/service';
import { Routes } from '../../../constants';
import { isArray } from '../../../utils/helpers';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP, FIELDS } from './constants';

class Login extends Component {
  state = { email: '', password: '', isError: false, errorMessages: [] };

  handleLogin = async event => {
    event.preventDefault();
    try {
      const response = await login(this.state); // eslint-disable-line no-unused-vars
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
    const formattedErrorMessages = isArray(errorMessages) ? errorMessages : [errorMessages];

    return (
      <div className={`${styles.container} column background-wild-sand`}>
        <img src={imagePlaceholder} alt="Wolox logo" className={styles.woloxLogoImage} />
        <form onSubmit={this.handleLogin} className={`${styles.loginForm} m-bottom-3`}>
          {Object.keys(FIELDS).map(field => (
            <InputLabel
              key={field}
              textClassName={`${styles.inputLabel} m-top-3`}
              dataFor={field}
              label={FIELDS[field].label}
              inputClassName={`${styles.input} full-width`}
              name={field}
              inputId={field}
              handleChange={this.onChangeField}
              inputType={FIELDS[field].inputType}
            />
          ))}
          <button type="submit" className={`${styles.loginButton} full-width m-top-4`}>
            {LOGIN}
          </button>
        </form>
        <Link className={`${styles.signUpButton} full-width`} to={Routes.SIGN_UP}>
          {SIGN_UP}
        </Link>
        {isError && <ErrorMessages errorMessages={formattedErrorMessages} />}
      </div>
    );
  }
}

export default Login;
