import React, { Component } from 'react';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  render() {
    const { title, genre, author, editorial, publicationYear } = this.props.location.state;
    return <BookDetail title={title} author={author} genre={genre} />;
  }
}

export default BookDetailContainer;
