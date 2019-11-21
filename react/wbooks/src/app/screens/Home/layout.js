import React from 'react';
import { array } from 'prop-types';

import NavBar from '../../components/NavBar';
import BookInfo from '../../components/BookInfo';

import styles from './styles.module.scss';

function Home({ books }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={`row ${styles.booksContainer}`}>
        {books.map(({ author, title, id }) => (
          <BookInfo author={author} title={title} className="m-right-7 m-top-7" key={id} />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  books: array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
