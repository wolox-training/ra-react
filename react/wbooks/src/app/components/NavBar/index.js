import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { remove } from 'local-storage';

import imagePlaceholder from '../../assets/wolox-logo.png';
import { Routes, ACCESS_TOKEN } from '../../../constants';

import styles from './styles.module.scss';
import { LOGOUT } from './constants';

class NavBar extends Component {
  handleLogout = () => remove(ACCESS_TOKEN);

  render() {
    return (
      <div className={`row center ${styles.navbar}`}>
        <div className={`row middle ${styles.navbarComponents}`}>
          <img src={imagePlaceholder} alt="Wolox logo" className={styles.woloxLogoImage} />
          <Link className={styles.logout} to={Routes.LOGIN_AND_HOME} onClick={this.handleLogout}>
            {LOGOUT}
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
