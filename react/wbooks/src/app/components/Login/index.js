import React, { Component } from 'react';
import { get, isArray } from 'lodash';
import { object, objectOf } from 'prop-types';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';
import { login } from '../../../services/User/service';
import { Routes } from '../../../constants';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP, FIELDS, FIELDS_DATA } from './constants';

class Login extends Component {
  state = { email: '', password: '', isError: false, errorMessages: [] };

  handleLogin = async event => {
    event.preventDefault();
    try {
      const response = await login(this.state);
      console.log(response);
      this.setState({ isError: false, errorMessages: [] });
    } catch (error) {
      this.setState({ isError: true, errorMessages: error.data.error });
    }
  };

  handleSignUp = () => this.props.history.push(Routes.SIGN_UP);

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
        <form onSubmit={this.handleLogin} className={`${styles.loginForm} m-bottom-3`}>
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
          <button type="submit" className={`${styles.loginButton} full-width m-top-4`}>
            {LOGIN}
          </button>
        </form>
        <button type="button" onClick={this.handleSignUp} className={`${styles.signUpButton} full-width`}>
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

Login.propTypes = {
  history: objectOf(object)
};

export default Login;
