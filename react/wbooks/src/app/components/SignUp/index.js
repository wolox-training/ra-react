import React, { Component } from 'react';

import { createUser } from '../../../services/User/service';

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

  // required = value => {
  //   return value ? undefined : 'Required';
  // };

  render() {
    const { errorMessages, isError } = this.state;
    return <SignUp onSubmit={this.handleSubmit} errorMessages={errorMessages} isError={isError} />;
  }
}

export default SignUpContainer;
