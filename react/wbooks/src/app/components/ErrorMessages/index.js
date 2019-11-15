import React from 'react';
import { array } from 'prop-types';

import styles from './styles.module.scss';

function ErrorMessages({ errorMessages }) {
  return (
    <div className={styles.errorsContainer}>
      {errorMessages.map(error => (
        <div className={`${styles.error} full-width`} key={error}>
          {error}
        </div>
      ))}
    </div>
  );
}

ErrorMessages.propTypes = {
  errorMessages: array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default ErrorMessages;
