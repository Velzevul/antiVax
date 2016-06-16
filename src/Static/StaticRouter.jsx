import React from 'react'
import {Route} from 'react-router'

import StaticSection from './StaticSection'

export default (
  <Route>
    <Route path=":sectionId" component={StaticSection} />
    <Route path=":sectionId/:pageId" component={StaticSection} />
    <Route path=":sectionId/:pageId/:itemId" component={StaticSection} />
  </Route>
)
