import React from 'react';
import { Provider } from 'react-redux';

import Routes from './app/components/Routes';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
