import React from 'react'

import SearchBar from '../SearchBar'
import styles from './HeaderDesktop.css'
import {Flex, Media, MediaFigure, MediaBody} from '../Layouts'
import Locale from '../Locale'
import Wrapper from '../Wrapper'

import img from './logo.svg'

const HeaderDesktop = ({
  location
}) => {
  return (
    <header className={styles.Header}>
      <Wrapper>
        <Flex
          alignItems="flex-end"
          justify-content="space-between">
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

          <div className={styles.Header__search}>
            <SearchBar location={location} />
          </div>
        </Flex>
      </Wrapper>
    </header>
  )
}

export default HeaderDesktop
