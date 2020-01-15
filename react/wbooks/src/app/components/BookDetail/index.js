/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  render() {
    const { title, genre, author, editorial, publicationYear } = this.props.location.state;
    return (
      <BookDetail
        title={title}
        author={author}
        genre={genre}
        editorial={editorial}
        publicationYear={publicationYear}
      />
    );
  }
}

BookDetailContainer.propTypes = {
  location: shape({
    state: shape({
      title: string.isRequired,
      genre: string.isRequired,
      author: string.isRequired,
      editorial: string.isRequired,
      publicationYear: number.isRequired
    }).isRequired
  }).isRequired
};

export default BookDetailContainer;
