import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imagePlaceholder from '../../assets/wolox-logo.png';
import { Routes } from '../../../constants';

import styles from './styles.module.scss';
import { LOGOUT } from './constants';

class Logout extends Component {
  handleLogout = () => {
    // todo
  };

  render() {
    return (
      <div className={`row center ${styles.navbar}`}>
        <div className={`row middle ${styles.navbarComponents}`}>
          <img src={imagePlaceholder} alt="Wolox logo" className={styles.woloxLogoImage} />
          <Link className={styles.logout} to={Routes.LOGIN}>
            {LOGOUT}
          </Link>
        </div>
      </div>
    );
  }
}

export default Logout;
