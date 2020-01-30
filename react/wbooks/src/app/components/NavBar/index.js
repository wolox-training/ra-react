import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import woloxLogoImage from '../../assets/wolox-logo.png';
import { Routes } from '../../../constants';
import authActionsCreators from '../../../redux/auth/actions';

import styles from './styles.module.scss';
import { LOGOUT } from './constants';

function NavBar({ handleLogout }) {
  return (
    <div className={`row center ${styles.navbar}`}>
      <div className={`row middle ${styles.navbarComponents}`}>
        <img src={woloxLogoImage} alt="Wolox logo" className={styles.woloxLogoImage} />
        <Link className={styles.logout} to={Routes.LOGIN_AND_HOME} onClick={handleLogout}>
          {LOGOUT}
        </Link>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  handleLogout: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(authActionsCreators.removeAccessToken())
});

export default connect(null, mapDispatchToProps)(NavBar);
