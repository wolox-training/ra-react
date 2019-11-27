import React from 'react';
import { array } from 'prop-types';
import cn from 'classnames';

import NavBar from '../../components/NavBar';
import BookInfo from '../../components/BookInfo';

import styles from './styles.module.scss';

function Home({ books }) {
  const areBooks = books.length > 0;

  return (
    <div className={cn({ 'background-wild-sand': areBooks, 'background-white': !areBooks })}>
      <NavBar />
      {areBooks > 0 ? (
        <div className={`row ${styles.booksContainer}`}>
          {books.map(({ author, title, id }) => (
            <BookInfo author={author} title={title} className="m-right-7 m-top-7" key={id} />
          ))}
        </div>
      ) : (
        <p className={`${styles.noBooksMessage} full-width`}>No hay ningún libro usar i18n</p>
      )}
    </div>
  );
}

Home.propTypes = {
  books: array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
