import React, { Component } from 'react';

import { get } from '../../../services/Book/service';
import { ACCESS_TOKEN } from '../../../constants';

import Home from './layout';

class HomeContainer extends Component {
  state = { books: [] };

  async componentDidMount() {
    const books = await get(localStorage.getItem(ACCESS_TOKEN));
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ books });
  }

  render() {
    return <Home books={this.state.books} />;
  }
}

export default HomeContainer;
