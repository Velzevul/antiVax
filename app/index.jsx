import './global.css';

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './test.css';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import Root from './components/Root';
// import Questions from './components/Questions';
// import Vaccines from './components/Vaccines';

ReactDOM.render((
  <div className={styles.test}>
    Hello!
  </div>
  // <Router history={browserHistory}>
  //   <Route path="/" component={Root}>
  //     <IndexRoute component={Questions} />
  //     <Route path="/questions" component={Questions} />
  //     <Route path="/vaccines" component={Vaccines} />
  //   </Route>
  // </Router>
), document.getElementById('app'));
