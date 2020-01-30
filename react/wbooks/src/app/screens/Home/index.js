import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import { actionCreators as booksActionsCreators } from '../../../redux/books/actions';

import Home from './layout';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return <Home books={this.props.books} />;
  }
}

HomeContainer.propTypes = {
  books: array.isRequired, // eslint-disable-line react/forbid-prop-types
  getBooks: func.isRequired
};

const mapStateToProps = state => ({
  books: state.books.books
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(booksActionsCreators.getBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
