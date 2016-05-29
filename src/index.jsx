import 'babel-polyfill';

import './global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import configureStore from './store';
import App from './App';
import staticRouter from './Static';
import faqRouter from './Faq';
import blogRouter from './Blog';


const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/questions" />

        {faqRouter}
        {blogRouter}
        {staticRouter}
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
