import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './styles.scss';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router } from 'react-router-dom';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  mountNode
);
