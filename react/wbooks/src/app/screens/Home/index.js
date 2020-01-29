import React, { Component } from 'react';

import store from '../../../redux/store';
import booksActionsCreators from '../../../redux/books/actions';

import Home from './layout';

class HomeContainer extends Component {
  state = { books: { books: [] } };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const { books } = store.getState();
      this.setState({ books });
    });
    store.dispatch(booksActionsCreators.getBooks());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Home books={this.state.books.books} />;
  }
}

export default HomeContainer;
