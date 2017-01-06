import React from 'react'

import HeaderContainer from '../HeaderContainer'
// import Footer from '../Footer'
import FlashMessage from '../FlashMessage'
import MainNavContainer from '../MainNavContainer'
import {Page, PageContent} from '../Layouts'

const App = ({
  children,
  location,
  params,
  width,
  widthThreshold
}) => {
  return (
    <Page>
      {width >= widthThreshold
        ? (
          <div>
            <HeaderContainer
              location={location} />
            <MainNavContainer
              params={params} />
          </div>
        )
        : (
          <div>
            <MainNavContainer
              params={params} />
            <HeaderContainer
              location={location} />
          </div>
        )
      }

      <PageContent>
        {children}
      </PageContent>

      <FlashMessage />
    </Page>
  )
}

export default App
