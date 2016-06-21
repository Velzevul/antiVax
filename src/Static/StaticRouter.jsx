import React from 'react'
import {Route} from 'react-router'

import StaticSection from './StaticSection'
import StaticPage from './StaticPage'
import StaticItem from './StaticItem'
import VaccinationSchedule from './VaccinationSchedule'

export default (
  <Route>
    <Route path=":sectionId" component={StaticSection}>
      <Route path="manitoba-health-schedule" component={VaccinationSchedule} />

      <Route path=":pageId" component={StaticPage}>
        <Route path=":itemId" component={StaticItem} />
      </Route>
    </Route>
  </Route>
)
