import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';

import store from '../../../redux/store';
import { actionCreators as booksActionsCreators } from '../../../redux/books/actions';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  state = { book: {}, bookLoading: false };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const {
        books: { book, bookLoading }
      } = store.getState();
      this.setState({ book, bookLoading });
    });
    const { id } = this.props.location.state;
    store.dispatch(booksActionsCreators.getBook(id));
  }

  componentWillUnmount() {
    store.dispatch(booksActionsCreators.removeBook());
    this.unsubscribe();
  }

  render() {
    const { title, author } = this.props.location.state;
    const {
      book: { publicationYear, editorial, genre, imageUrl },
      bookLoading
    } = this.state;

    return (
      <BookDetail
        title={title}
        author={author}
        genre={genre}
        editorial={editorial}
        publicationYear={publicationYear}
        imageUrl={imageUrl}
        bookObtained={!bookLoading}
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
