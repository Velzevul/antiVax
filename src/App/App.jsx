import React from 'react'

import Header from './Header'
import Footer from './Footer'
import {Page, PageContent} from '../Layouts'

const App = ({
  children,
  location
}) => {
  return (
    <Page>
      <Header location={location} />

      <PageContent>
        {children}
      </PageContent>

      <Footer />
    </Page>
  )
}

export default App
