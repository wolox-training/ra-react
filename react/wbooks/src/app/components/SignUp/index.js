import React, { Component } from 'react';

import { createUser } from '../../../services/User/service';
import { LANGUAGE } from '../../../constants';

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

  onHandleLanguageChangeClick = event => {
    const language = event.target.dataset.lang;
    localStorage.setItem(LANGUAGE, language);
    window.location.reload(false);
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
