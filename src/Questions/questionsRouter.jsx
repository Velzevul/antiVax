import React from 'react';
import {Route} from 'react-router';

import Questions from './Questions';
import FaqItem from './FaqItem';


export default (
  <Route path="questions" component={Questions}>
    <Route path=":itemId" component={FaqItem} />
  </Route>
);
