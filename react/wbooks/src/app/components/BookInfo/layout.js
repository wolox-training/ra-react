import React from 'react';
import { string, func } from 'prop-types';

import imagePlaceholder from '../../assets/book-cover.png';

import styles from './styles.module.scss';

function BookInfo({ title, author, className, handleOnClick }) {
  return (
    <div className={`column ${styles.container} ${className}`} onClick={handleOnClick}>
      <img src={imagePlaceholder} alt="Wolox book cover" className={styles.woloxBookCoverImage} />
      <h2 className={`${styles.title} m-top-2`}>{title}</h2>
      <span className={`${styles.author} m-top-2`}>{author}</span>
    </div>
  );
}

BookInfo.propTypes = {
  author: string.isRequired,
  handleOnClick: func.isRequired,
  title: string.isRequired,
  className: string
};

BookInfo.defaultProps = {
  className: ''
};

export default BookInfo;
