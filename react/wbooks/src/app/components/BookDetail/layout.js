import React from 'react';
import { string, bool } from 'prop-types';
import { t } from 'i18next';
import Skeleton from 'react-skeleton-loader';

import bookCoverImage from '../../assets/book-cover.png';
import badgeImage from '../../assets/badge.png';

import styles from './styles.module.scss';

function BookDetail({ title, genre, author, editorial, publicationYear, imageUrl, bookObtained }) {
  return (
    <div className={`column ${styles.container}`}>
      <div className={`${styles.bookInformationContent} row background-white`}>
        <div className="position-relative row center">
          {bookObtained ? (
            <>
              <img
                src={imageUrl || bookCoverImage}
                alt="Wolox book cover"
                className={styles.woloxBookCoverImage}
              />
              <img src={badgeImage} alt="Badge" className={styles.badge} />
            </>
          ) : (
            <Skeleton />
          )}
        </div>
        <div className={`column ${styles.bookDetails}`}>
          <h1 className={`${styles.title} bold}`}>
            {bookObtained ? (
              <>
                {title}
                <span className={`${styles.fieldDescription} bold ${styles.genre}`}>{`(${genre})`}</span>
              </>
            ) : (
              <Skeleton />
            )}
          </h1>
          <p className={`${styles.field} bold`}>
            {bookObtained ? (
              <>
                {`${t('BookDetail:author')}: `}
                <span className={styles.fieldDescription}>{author}</span>
              </>
            ) : (
              <Skeleton />
            )}
          </p>
          <p className={`${styles.field} bold`}>
            {bookObtained ? (
              <>
                {`${t('BookDetail:editorial')}:`} <span className={styles.fieldDescription}>{editorial}</span>
              </>
            ) : (
              <Skeleton />
            )}
          </p>
          <p className={`${styles.field} bold`}>
            {bookObtained ? (
              <>
                {`${t('BookDetail:publicationYear')}: `}
                <span className={styles.fieldDescription}>{publicationYear}</span>
              </>
            ) : (
              <Skeleton />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

BookDetail.propTypes = {
  bookObtained: bool.isRequired,
  author: string,
  editorial: string,
  genre: string,
  imageUrl: string,
  publicationYear: string,
  title: string
};

BookDetail.defaultProps = {
  author: '',
  editorial: '',
  genre: '',
  imageUrl: '',
  publicationYear: '',
  title: ''
};

export default BookDetail;
