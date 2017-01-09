import React from 'react'
import {connect} from 'react-redux'

import {Grid, GridItem} from '../Layouts/Grid'
import Wrapper from '../Layouts/Wrapper'
import Box from '../Layouts/Box'
import Block from '../Layouts/Block'
import HeadingLined from '../Typography/HeadingLined'
import Text from '../Typography/Text'

import styles from './CustomPageAbout.css'

const CustomPageAbout = ({
  layout
}) => {
  let gridSize = 0
  let boxSize = 0

  switch (layout) {
    case 's':
    case 'm':
      gridSize = 1
      boxSize = 4
      break
    case 'l':
    case 'xl':
      gridSize = 2
      boxSize = 6
      break
    default:
      console.error(`unexpected layout value ${layout}`)
  }

  return (
    <div>
      <div className={styles.AboutSection} />

      <Wrapper>
        <Grid
          gutterBottom={0}>
          <GridItem
            gutterBottom={0}
            span={1}
            outOf={gridSize}>
            <Box n={boxSize}>
              <section>
                <Block n={boxSize - 2}>
                  <HeadingLined>Who We Are</HeadingLined>
                </Block>

                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </section>
            </Box>
          </GridItem>

          <GridItem
            gutterBottom={0}
            span={1}
            outOf={gridSize}>
            <Box n={boxSize}>
              <section>
                <Block n={boxSize - 2}>
                  <HeadingLined>Funding for the project</HeadingLined>
                </Block>

                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </section>
            </Box>
          </GridItem>
        </Grid>
      </Wrapper>
    </div>
  )
}

export default connect(
  state => {
    return {
      layout: state.ui.layout
    }
  }
)(CustomPageAbout)
