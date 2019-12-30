import React, { Component } from 'react';

import { getBooks } from '../../../services/Book/service';
import { ACCESS_TOKEN } from '../../../constants';
import store from '../../../redux/store';
import booksActionsCreators from '../../../redux/books/actions';

import Home from './layout';

class HomeContainer extends Component {
  state = { books: [] };

  getBooks = () => getBooks(localStorage.getItem(ACCESS_TOKEN));

  componentDidMount() {
    store.subscribe(() => {
      const { books } = store.getState();
      this.setState({ books });
    });
    const fetchedBooks = this.getBooks();
    store.dispatch(booksActionsCreators.addBooks(fetchedBooks));
  }

  render() {
    return <Home books={this.state.books} />;
  }
}

export default HomeContainer;
