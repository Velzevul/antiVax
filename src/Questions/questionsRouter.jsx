import React from 'react';
import {Route} from 'react-router';

import QuestionsPage from './QuestionsPage';
import FaqItem from './FaqItem';


export default (
  <Route path="questions" component={QuestionsPage}>
    <Route path=":itemId" component={FaqItem} />
  </Route>
);
