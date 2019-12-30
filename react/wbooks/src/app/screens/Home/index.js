import React, { Component } from 'react';

import { getBooks } from '../../../services/Book/service';
import { ACCESS_TOKEN } from '../../../constants';

import Home from './layout';

class HomeContainer extends Component {
  state = { books: [] };

  getBooks = () => getBooks(localStorage.getItem(ACCESS_TOKEN));

  componentDidMount() {
    const books = this.getBooks();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ books });
  }

  render() {
    return <Home books={this.state.books} />;
  }
}

export default HomeContainer;
