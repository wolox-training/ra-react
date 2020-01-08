import React from 'react';
import { string, number } from 'prop-types';

import bookCoverImage from '../../assets/book-cover.png';
import badgeImage from '../../assets/badge.png';

import styles from './styles.module.scss';

function BookDetail({
  title = 'El gran pez',
  genre = 'Ficción',
  author = 'Borges',
  editorial = 'Yellow',
  publicationYear = 1985
}) {
  return (
    <div className={`column ${styles.container}`}>
      {/* <a href="books.html" className="back">Atrás</a> */}
      <div className={`${styles.bookInformationContent} row background-white`}>
        <div className="position-relative row center">
          <img src={bookCoverImage} alt="Wolox book cover" className={styles.woloxBookCoverImage} />
          <img src={badgeImage} alt="Badge" className={styles.badge} />
        </div>
        <div className={`column ${styles.bookDetails}`}>
          <h1 className={`${styles.title} ${styles.bold}`}>
            {title}
            <span className={`${styles.fieldDescription} ${styles.bold}`}>{genre}</span>
          </h1>
          <p className={`${styles.field} ${styles.bold}`}>
            Autor del libro: <span className={styles.fieldDescription}>{author}</span>
          </p>
          <p className={`${styles.field} ${styles.bold}`}>
            Editorial: <span className={styles.fieldDescription}>{editorial}</span>
          </p>
          <p className={`${styles.field} ${styles.bold}`}>
            Año de publicación: <span className={styles.fieldDescription}>{publicationYear}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// BookDetail.propTypes = {
//   author: string.isRequired,
//   editorial: string.isRequired,
//   genre: string.isRequired,
//   publicationYear: number.isRequired,
//   title: string.isRequired
//   // classNameName: string
// };

// BookDetail.defaultProps = {
//   classNameName: ''
// };

export default BookDetail;
