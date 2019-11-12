import React, { Component } from 'react';
import { get } from 'lodash';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';
// import { createUser } from '../../../services/UserService';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP, FIELDS, FIELDS_DATA } from './constants';

class Login extends Component {
  state = { isError: false };

  handleLogin = () => {
    try {
      // const response = await createUser({ ...this.state, locale: 'en' }); // eslint-disable-line no-unused-vars
      this.setState({ isError: false, errorMessages: [] });
    } catch (error) {
      this.setState({ isError: true, errorMessages: error.data.error });
    }
  };

  onChangeField = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  render() {
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

export default Login;
