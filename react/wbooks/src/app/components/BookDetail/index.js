import React, { Component } from 'react';
import { shape, string, number, bool, func } from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators as booksActionsCreators } from '../../../redux/books/actions';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  componentDidMount() {
    const {
      location: {
        state: { id }
      },
      getBook
    } = this.props;
    getBook(id);
  }

  render() {
    const { title, author } = this.props.location.state;
    const {
      book: { publicationYear, editorial, genre, imageUrl },
      bookLoading
    } = this.props;

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
  book: shape({ publicationYear: string, editorial: string, genre: string, imageUrl: string }).isRequired,
  bookLoading: bool.isRequired,
  getBook: func.isRequired,
  location: shape({
    state: shape({
      title: string.isRequired,
      author: string.isRequired,
      id: number.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  book: state.books.book,
  bookLoading: state.books.bookLoading
});

const mapDispatchToProps = dispatch => ({
  getBook: id => dispatch(booksActionsCreators.getBook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailContainer);
