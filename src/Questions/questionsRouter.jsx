import React from 'react';
import {Route} from 'react-router';

import QuestionsPage from './QuestionsPage';


export default (
  <Route>
    <Route path="questions" component={QuestionsPage} />
    <Route path="questions/:itemId" component={QuestionsPage} />
  </Route>
);
