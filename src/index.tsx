import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Home } from './pages/home';
import { store } from './redux/store';

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
