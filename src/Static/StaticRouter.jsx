import React from 'react';
import {Route} from 'react-router';

import StaticSection from './StaticSection';
import StaticPage from './StaticPage';
import StaticItem from './StaticItem';


export default (
  <Route path=":sectionId" component={StaticSection}>
    <Route path=":pageId" component={StaticPage}>
      <Route path=":itemId" component={StaticItem} />
    </Route>
  </Route>
);
