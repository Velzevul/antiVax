import React from 'react';
import {Route} from 'react-router';

import FaqRoot from './FaqRoot';
import FaqItem from './FaqItem';


export default (
  <Route path="questions" component={FaqRoot}>
    <Route path=":itemId" component={FaqItem} />
  </Route>
);
