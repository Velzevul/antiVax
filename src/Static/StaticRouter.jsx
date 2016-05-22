import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import StaticSection from './StaticSection';
import StaticPage from './StaticPage';
import StaticItem from './StaticItem';


export default (
  <Route path=":section" component={StaticSection}>
    <IndexRedirect to="how-vaccines-work" />

    <Route path=":page" component={StaticPage}>
      <Route path=":item" component={StaticItem} />
    </Route>
  </Route>
);
