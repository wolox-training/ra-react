import React from 'react';
import { string } from 'prop-types';
import { t } from 'i18next';

import bookCoverImage from '../../assets/book-cover.png';
import badgeImage from '../../assets/badge.png';

import styles from './styles.module.scss';

function BookDetail({ title, genre, author, editorial, publicationYear, imageUrl }) {
  return (
    <div className={`column ${styles.container}`}>
      <div className={`${styles.bookInformationContent} row background-white`}>
        <div className="position-relative row center">
          <img
            src={imageUrl || bookCoverImage}
            alt="Wolox book cover"
            className={styles.woloxBookCoverImage}
          />
          <img src={badgeImage} alt="Badge" className={styles.badge} />
        </div>
        <div className={`column ${styles.bookDetails}`}>
          <h1 className={`${styles.title} ${styles.bold}`}>
            {title}
            <span className={`${styles.fieldDescription} ${styles.bold} ${styles.genre}`}>
              {`(${genre})`}
            </span>
          </h1>
          <p className={`${styles.field} ${styles.bold}`}>
            {`${t('BookDetail:author')}:`} <span className={styles.fieldDescription}>{author}</span>
          </p>
          <p className={`${styles.field} ${styles.bold}`}>
            {`${t('BookDetail:editorial')}:`} <span className={styles.fieldDescription}>{editorial}</span>
          </p>
          <p className={`${styles.field} ${styles.bold}`}>
            {`${t('BookDetail:publicationYear')}: `}
            <span className={styles.fieldDescription}>{publicationYear}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

BookDetail.propTypes = {
  author: string.isRequired,
  editorial: string.isRequired,
  genre: string.isRequired,
  publicationYear: string.isRequired,
  title: string.isRequired,
  imageUrl: string
};

BookDetail.defaultProps = {
  imageUrl: ''
};

export default BookDetail;
