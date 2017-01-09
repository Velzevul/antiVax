import React from 'react'
import {connect} from 'react-redux'

import SearchBar from '../SearchBar'
import styles from './Header.css'
import {Flex, Media, MediaFigure, MediaBody} from '../Layouts'
import Locale from '../Locale'
import Wrapper from '../Layouts/Wrapper'
import {Grid, GridItem} from '../Layouts/Grid'
import CurrentUser from '../CurrentUser'

import img from './logo.svg'

const Header = ({
  location,
  layout
}) => {
  let gridSize = 0
  let sitenameSpan = 0
  let searchSpan = 0

  switch (layout) {
    case 's':
    case 'm':
      gridSize = 1
      sitenameSpan = 1
      searchSpan = 1
      break
    case 'l':
    case 'xl':
      gridSize = 3
      sitenameSpan = 2
      searchSpan = 1
      break
    default:
      console.error(`unexpected layout type ${layout}`)
  }
  return (
    <header className={styles.Header}>
      <Wrapper>
        <Grid
          alignItems="flex-end"
          gutter={0}
          gutterBottom={2}>
          <GridItem
            span={sitenameSpan}
            outOf={gridSize}
            gutter={0}
            gutterBottom={2}>
            <CurrentUser />

            <Media alignItems="flex-end">
              <MediaFigure n="1.5">
                <img
                  src={img}
                  className={styles.Header__logo} />
              </MediaFigure>

              <MediaBody>
                <Flex>
                  <h1 className={styles.Header__title}>Vaccine Answers</h1>
                  <Locale />
                </Flex>

                <div className={styles.Header__subtitle}>A reliable source of information about vaccines in Canada</div>
              </MediaBody>
            </Media>
          </GridItem>

          <GridItem
            span={searchSpan}
            outOf={gridSize}
            gutter={0}
            gutterBottom={2}>

            <SearchBar location={location} />
          </GridItem>
        </Grid>
      </Wrapper>
    </header>
  )
}

export default connect(
  state => {
    return {
      layout: state.ui.layout
    }
  }
)(Header)
