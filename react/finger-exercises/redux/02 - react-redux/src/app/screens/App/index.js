import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import booksActionsCreators from '../../../redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  state = {
    books: [],
    bookSelected: [],
    booksQuantity: {}
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected, booksQuantity } = store.getState();
      this.setState({ books, bookSelected, booksQuantity });
    });
    store.dispatch(booksActionsCreators.getBooks());
  }

  onSearch = value => {
    store.dispatch(booksActionsCreators.searchBook(value));
  };

  addToCart = item => {
    store.dispatch(booksActionsCreators.addToCart(item));
  };

  addItem = itemId => {
    store.dispatch(booksActionsCreators.addItem(itemId));
  };

  removeItem = itemId => {
    store.dispatch(booksActionsCreators.removeItem(itemId));
  };

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {this.state.books.length ? (
            this.state.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.state.bookSelected.length ? (
          <ShoppingCart
            data={this.state.bookSelected.map(book => ({
              ...book,
              quantity: this.state.booksQuantity[book.id]
            }))}
            addItem={this.addItem}
            removeItem={this.removeItem}
          />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
