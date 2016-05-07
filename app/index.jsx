import './styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Root from './components/Root';
import Questions from './components/Questions';
import Vaccines from './components/Vaccines';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Questions} />
      <Route path="/questions" component={Questions} />
      <Route path="/vaccines" component={Vaccines} />
    </Route>
  </Router>
), document.getElementById('app'));
