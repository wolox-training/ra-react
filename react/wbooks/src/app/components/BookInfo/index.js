import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Routes } from '../../../constants';

import BookInfo from './layout';

class BookInfoContainer extends Component {
  handleOnClick = () => {
    const { title, author, id } = this.props;
    this.props.history.push({
      pathname: Routes.BOOK_DETAIL.replace(':id', id),
      state: {
        title,
        author,
        genre: 'magia'
      }
    });
  };

  render() {
    const { title, author, className } = this.props;
    return (
      <BookInfo title={title} author={author} className={className} handleOnClick={this.handleOnClick} />
    );
  }
}

export default withRouter(BookInfoContainer);
