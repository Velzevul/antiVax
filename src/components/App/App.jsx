import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import FlashMessage from '../FlashMessage'
import MainNav from '../MainNav'
import {Page, PageContent} from '../Layouts'

const App = ({
  children,
  location,
  params
}) => {
  return (
    <Page>
      <Header location={location} />
      <MainNav params={params} />

      <PageContent>
        {children}
      </PageContent>

      <Footer />
      <FlashMessage />
    </Page>
  )
}

export default App
