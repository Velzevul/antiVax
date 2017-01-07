import React from 'react'

import styles from './HeaderMobile.css'
import {Flex, Media, MediaFigure, MediaBody} from '../Layouts'
import Locale from '../Locale'
import Wrapper from '../Wrapper'
import SearchBar from '../SearchBar'

import img from './logo.svg'

const HeaderMobile = ({
  location,
  toggleMainMenu
}) => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__body}>
        <Wrapper>
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
        </Wrapper>
      </div>

      <div className={styles.Header__navigationBar}>
        <Wrapper>
          <Flex
            justifyContent="space-between"
            alignItems="center">
            <button
              className={styles.Header__menuBtn}
              onClick={toggleMainMenu} />

            <div className={styles.Header__search}>
              <SearchBar
                location={location}
                label={false} />
            </div>
          </Flex>
        </Wrapper>
      </div>
    </header>
  )
}

export default HeaderMobile
