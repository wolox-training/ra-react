import React from 'react';
import { t } from 'i18next';

import imagePlaceholder from '../../assets/wolox-logo.png';
// import PropTypes from 'prop-types';
import InputLabel from '../InputLabel';

import styles from './styles.module.scss';

function SignUp() {
  return (
    <div className={`${styles.container} column background-wild-sand`}>
      <img src={imagePlaceholder} alt="Wolox logo" className={styles.woloxLogoImage} />
      <form target="_blank" action="" method="POST" className={`${styles.form} m-bottom-3`}>
        <InputLabel
          className=""
          textClassName={`${styles.inputLabel} m-top-3`}
          dataFor="name"
          label={t('SignUp:name')}
          inputClassName={`${styles.input} full-width`}
          name="name"
          inputId="name"
          inputType="text"
        />
        <InputLabel
          className=""
          textClassName={`${styles.inputLabel} m-top-3`}
          dataFor="lastname"
          label={t('SignUp:lastname')}
          inputClassName={`${styles.input} full-width`}
          name="lastname"
          inputId="lastname"
          inputType="text"
        />
        <InputLabel
          className=""
          textClassName={`${styles.inputLabel} m-top-3`}
          dataFor="email"
          label="Email"
          inputClassName={`${styles.input} full-width`}
          name="email"
          inputId="email"
          inputType="text"
        />
        <InputLabel
          className=""
          textClassName={`${styles.inputLabel} m-top-3`}
          dataFor="password"
          label="Password"
          inputClassName={`${styles.input} full-width`}
          name="password"
          inputId="password"
          inputType="password"
        />
        <InputLabel
          className=""
          textClassName={`${styles.inputLabel} m-top-3`}
          dataFor="passwordConfirmation"
          label={t('SignUp:passwordConfirmation')}
          inputClassName={`${styles.input} full-width`}
          name="passwordConfirmation"
          inputId="passwordConfirmation"
          inputType="password"
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

export default SignUp;
