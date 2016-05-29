import React from 'react';
import {Route} from 'react-router';

import Blogpost from './Blogpost';
import Blog from './Blog';


export default (
  <Route>
    <Route path="blog" component={Blog} />
    <Route path="blog/:blogpostId" component={Blogpost} />
  </Route>
);
