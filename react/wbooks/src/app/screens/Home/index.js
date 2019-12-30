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
    return this.getBooks().then(books => store.dispatch(booksActionsCreators.addBooks(books)));
  }

  render() {
    return <Home books={this.state.books} />;
  }
}

export default HomeContainer;
