import React from 'react'
import {Route} from 'react-router'

import Blog from './Blog'

export default (
  <Route>
    <Route path="blog" component={Blog} />
    <Route path="blog/:blogpostId" component={Blog} />
  </Route>
)
