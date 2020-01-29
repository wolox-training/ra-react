import React from 'react';
import { array } from 'prop-types';
import cn from 'classnames';
import { t } from 'i18next';

import NavBar from '../../components/NavBar';
import BookInfo from '../../components/BookInfo';

import styles from './styles.module.scss';

function Home({ books }) {
  const booksAvailable = books.length > 0;

  return (
    <div className={cn({ 'background-wild-sand': booksAvailable, 'background-white': !booksAvailable })}>
      <NavBar />
      {booksAvailable ? (
        <div className={`row ${styles.booksContainer}`}>
          {books.map(({ author, title, id }) => (
            <BookInfo author={author} title={title} id={id} className="m-right-7 m-bottom-7" key={id} />
          ))}
        </div>
      ) : (
        <p className={`${styles.noBooksMessage} full-width`}>{t('Home:noBooksMessage')}</p>
      )}
    </div>
  );
}

Home.propTypes = {
  books: array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
