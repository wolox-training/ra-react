import React, { Component } from 'react';

import { createUser } from '../../../services/User/service';
import { changeLang, LANGUAGES } from '../../config/i18n';

import SignUp from './layout';

class SignUpContainer extends Component {
  state = {
    isError: false,
    errorMessages: []
  };

  handleSubmit = async values => {
    try {
      const response = await createUser({ ...values, locale: 'en' }); // eslint-disable-line no-unused-vars
      this.setState({ isError: false, errorMessages: [] });
    } catch (error) {
      this.setState({ isError: true, errorMessages: error.data.error });
    }
  };

  onHandleLanguageChangeClick = () => {
    changeLang(LANGUAGES.EN);
  };

  render() {
    const { errorMessages, isError } = this.state;
    return (
      <SignUp
        onSubmit={this.handleSubmit}
        errorMessages={errorMessages}
        isError={isError}
        handleLanguageChangeClick={this.onHandleLanguageChangeClick}
      />
    );
  }
}

export default SignUpContainer;
