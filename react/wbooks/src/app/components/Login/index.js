import React, { Component } from 'react';
import { get, isArray } from 'lodash';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';
import { login } from '../../../services/User/service';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP, FIELDS, FIELDS_DATA } from './constants';

class Login extends Component {
  state = { email: '', password: '', isError: false, errorMessages: [] };

  handleLogin = async () => {
    try {
      const response = await login(this.state);
      console.log(response);
      this.setState({ isError: false, errorMessages: [] });
    } catch (error) {
      this.setState({ isError: true, errorMessages: error.data.error });
    }
  };

  onChangeField = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  render() {
    const errorMessages = isArray(this.state.errorMessages)
      ? this.state.errorMessages
      : [this.state.errorMessages];

    return (
      <div className={`${styles.container} column background-wild-sand`}>
        <img src={imagePlaceholder} alt="Wolox logo" className={styles.woloxLogoImage} />
        <form className={`${styles.loginForm} m-bottom-3`}>
          {FIELDS.map(field => (
            <InputLabel
              key={field}
              textClassName={`${styles.inputLabel} m-top-3`}
              dataFor={field}
              label={FIELDS_DATA[field].label}
              inputClassName={`${styles.input} full-width`}
              name={field}
              inputId={field}
              handleChange={this.onChangeField}
              inputType={get(FIELDS_DATA[field], 'inputType')}
            />
          ))}
          <button
            type="button"
            onClick={this.handleLogin}
            className={`${styles.loginButton} full-width m-top-4`}
          >
            {LOGIN}
          </button>
        </form>
        <button type="button" className={`${styles.signUpButton} full-width`}>
          {SIGN_UP}
        </button>
        {this.state.isError && (
          <div className={styles.errorsContainer}>
            {errorMessages.map(error => (
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

export default Login;
