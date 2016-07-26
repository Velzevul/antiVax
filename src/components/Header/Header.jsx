import React from 'react'

import MainNav from '../MainNav'
import SearchBar from '../SearchBar'
import styles from './Header.css'
import {Block, Wrap, Grid, GridItem} from '../Layouts'
import CurrentUser from '../CurrentUser'

import img from './logo.svg'

const Header = ({
  location
}) => {
  return (
    <header>
      <div className={styles.CoverImg}>
        <CurrentUser />

        <div className={styles.CoverImg__body}>
          <Wrap maxWidth="80rem">
            <div className={styles.Header}>
              <Grid alignItems="center">
                <GridItem span={1} outOf={5}>
                  <img src={img} className={styles.Header__logo} />
                </GridItem>

                <div>
                  <Block n={2}>
                    <Block>
                      <h1 className={styles.Header__title}>Vaccine Answers</h1>
                    </Block>

                    <h2 className={styles.Header__subtitle}>All the information you need to know about vaccines and vaccination in Manitoba</h2>
                  </Block>

                  <SearchBar location={location} />
                </div>
              </Grid>
            </div>
          </Wrap>

          <MainNav location={location} />
        </div>
      </div>
    </header>
  )
}

export default Header
