import React from 'react';
import { string } from 'prop-types';

import imagePlaceholder from '../../assets/book-cover.png';

import styles from './styles.module.scss';

function BookInfo({ title, author }) {
  return (
    <div className={`column ${styles.container}`}>
      <img src={imagePlaceholder} alt="Wolox book cover" className={styles.woloxBookCoverImage} />
      <h2 className={`${styles.title} m-top-2`}>{title}</h2>
      <span className={`${styles.author} m-top-2`}>{author}</span>
    </div>
  );
}

BookInfo.propTypes = {
  author: string.isRequired,
  title: string.isRequired
};

export default BookInfo;
