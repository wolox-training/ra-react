import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';

import store from '../../../redux/store';
import booksActionsCreators from '../../../redux/books/actions';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  state = { book: {} };

  componentDidMount() {
    store.subscribe(() => {
      const {
        books: { book }
      } = store.getState();
      this.setState({ book });
    });
    const { id } = this.props.location.state;
    store.dispatch(booksActionsCreators.getBook(id));
  }

  componentWillUnmount() {
    store.dispatch(booksActionsCreators.removeBook());
  }

  render() {
    const { title, author } = this.props.location.state;
    const { publicationYear, editorial, genre, imageUrl } = this.state.book;

    return (
      <BookDetail
        title={title}
        author={author}
        genre={genre}
        editorial={editorial}
        publicationYear={publicationYear}
        imageUrl={imageUrl}
      />
    );
  }
}

BookDetailContainer.propTypes = {
  location: shape({
    state: shape({
      title: string.isRequired,
      author: string.isRequired,
      id: number.isRequired
    }).isRequired
  }).isRequired
};

export default BookDetailContainer;
