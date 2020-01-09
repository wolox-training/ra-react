import React from 'react';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { bool, func, array } from 'prop-types';

import woloxLogoImage from '../../assets/wolox-logo.png';
import InputLabel from '../InputLabelStateless';
import ErrorMessages from '../ErrorMessages';
import { Routes } from '../../../constants';

import styles from './styles.module.scss';
import { LOGIN, SIGN_UP, FIELDS } from './constants';

function SignUp({ handleSubmit, errorMessages, isError }) {
  return (
    <div className={`${styles.container} column background-wild-sand`}>
      <img src={woloxLogoImage} alt="Wolox logo" className={styles.woloxLogoImage} />
      <form onSubmit={handleSubmit} className={`${styles.signUpForm} m-bottom-3`}>
        {Object.keys(FIELDS).map(field => (
          <Field
            key={field}
            component={InputLabel}
            name={field}
            // validate={this.required}
            textClassName={`${styles.inputLabel} m-top-3`}
            dataFor={field}
            label={FIELDS[field].label || t(`SignUp:${field}`)}
            inputClassName={`${styles.input} full-width`}
            inputId={field}
            inputType={FIELDS[field].inputType}
          />
        ))}
        <button type="submit" className={`${styles.signUpButton} full-width m-top-4`}>
          {SIGN_UP}
        </button>
      </form>
      <Link className={`${styles.loginButton} full-width`} to={Routes.LOGIN_AND_HOME}>
        {LOGIN}
      </Link>
      {isError && <ErrorMessages errorMessages={errorMessages} />}
    </div>
  );
}

SignUp.propTypes = {
  errorMessages: array.isRequired, // eslint-disable-line react/forbid-prop-types
  handleSubmit: func.isRequired,
  isError: bool.isRequired
};

export default reduxForm({
  form: 'SignUp'
})(SignUp);
