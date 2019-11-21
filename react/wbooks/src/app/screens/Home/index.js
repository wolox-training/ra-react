import React, { Component } from 'react';

import Home from './layout';

class HomeContainer extends Component {
  state = { books: [] };

  componentDidMount() {
    // cargar los datos para los libros
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      books: [
        { title: 'hola', author: 'mercedes beza' },
        { title: 'hola', author: 'mercedes beza' },
        { title: 'hola', author: 'mercedes beza' },
        { title: 'hola', author: 'mercedes beza' },
        { title: 'hola', author: 'mercedes beza' },
        { title: 'hola', author: 'mercedes beza' },
        { title: 'hola', author: 'mercedes beza' },
        { title: 'hola', author: 'mercedes beza' }
      ]
    });
  }

  render() {
    return <Home books={this.state.books} />;
  }
}

export default HomeContainer;
