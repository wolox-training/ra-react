import React, { Component } from 'react';
import { t } from 'i18next';
import { get } from 'lodash';

import imagePlaceholder from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabel';
import { createUser } from '../../../services/UserService';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP, FIELDS, FIELDS_DATA } from './constants';

class SignUp extends Component {
  state = { isError: false };

  handleSignUp = async () => {
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
    return (
      <div className={`${styles.container} column background-wild-sand`}>
        <img src={imagePlaceholder} alt="Wolox logo" className={styles.woloxLogoImage} />
        <form className={`${styles.signUpForm} m-bottom-3`}>
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
          <button
            type="button"
            onClick={this.handleSignUp}
            className={`${styles.signUpButton} full-width m-top-4`}
          >
            {SIGN_UP}
          </button>
        </form>
        <button type="button" className={`${styles.loginButton} full-width`}>
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

export default SignUp;
