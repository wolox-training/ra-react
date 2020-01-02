import React, { Component } from 'react';

import store from '../../../redux/store';
import booksActionsCreators from '../../../redux/books/actions';

import Home from './layout';

class HomeContainer extends Component {
  state = { books: { books: [] } };

  componentDidMount() {
    store.subscribe(() => {
      const { books } = store.getState();
      this.setState({ books });
    });
    store.dispatch(booksActionsCreators.getBooks());
  }

  render() {
    return <Home books={this.state.books.books} />;
  }
}

export default HomeContainer;
