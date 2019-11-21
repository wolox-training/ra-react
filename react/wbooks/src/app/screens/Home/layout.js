import React from 'react';
import { array } from 'prop-types';

import NavBar from '../../components/NavBar';
import BookInfo from '../../components/BookInfo';
import { getRandomNumber } from '../../../utils/helpers';

import styles from './styles.module.scss';

function Home({ books }) {
  return (
    <>
      <NavBar />
      <div className={`row ${styles.booksContainer}`}>
        {books.map(({ author, title }) => (
          <BookInfo
            author={author}
            title={title}
            className="m-right-7 m-top-7"
            key={`${author}${title}${getRandomNumber()}`}
          />
        ))}
      </div>
    </>
  );
}

Home.propTypes = {
  books: array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
