import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createUser } from '../../../services/User/service';

import SignUp from './layout';

class SignUpContainer extends Component {
  state = {
    isError: false,
    errorMessages: []
  };

  handleSubmit = async values => {
    console.log('aaaaaaa', values);
    // event.preventDefault();
    // const userData = {};
    // for (let i = 0; i < Object.keys(FIELDS).length; i++) {
    //   userData[event.target[i].name] = event.target[i].value;
    // }
    try {
      const response = await createUser({ ...values, locale: 'en' }); // eslint-disable-line no-unused-vars
      this.setState({ isError: false, errorMessages: [] });
    } catch (error) {
      this.setState({ isError: true, errorMessages: error.data.error });
    }
  };

  // required = value => {
  //   debugger;
  //   return value ? undefined : 'Required';
  // };

  render() {
    const { errorMessages, isError } = this.state;
    return <SignUp onSubmit={this.handleSubmit} errorMessages={errorMessages} isError={isError} />;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

// export default SignUpContainer;
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
