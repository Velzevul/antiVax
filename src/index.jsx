import 'babel-polyfill';

import './global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import App from './App';
import staticRouter from './Static';
import configureStore from './store';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {staticRouter}
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
