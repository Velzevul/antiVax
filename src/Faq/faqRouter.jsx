import React from 'react';
import {Route} from 'react-router';

import FaqList from './FaqList';
import FaqItem from './FaqItem';


export default (
  <Route path="questions" component={FaqList}>
    <Route path=":itemId" component={FaqItem} />
  </Route>
);
