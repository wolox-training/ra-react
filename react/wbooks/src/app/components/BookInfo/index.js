import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { string, object, number } from 'prop-types';

import { Routes } from '../../../constants';

import BookInfo from './layout';

class BookInfoContainer extends Component {
  onClick = () => {
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
    return <BookInfo title={title} author={author} className={className} handleOnClick={this.onClick} />;
  }
}

BookInfoContainer.propTypes = {
  author: string.isRequired,
  history: object.isRequired, // eslint-disable-line react/forbid-prop-types
  id: number.isRequired,
  title: string.isRequired,
  className: string
};

BookInfoContainer.defaultProps = {
  className: ''
};

export default withRouter(BookInfoContainer);
