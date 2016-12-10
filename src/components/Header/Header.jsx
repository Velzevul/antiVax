import React from 'react'

import SearchBar from '../SearchBar'
import styles from './Header.css'
import {Block, Wrap, Media, MediaFigure, MediaBody, Sup} from '../Layouts'
import CurrentUser from '../CurrentUser'

import img from './logo.svg'

const Header = ({
  location
}) => {
  return (
    <header>
      <Wrap>
        <div className={styles.Header}>
          <div className={styles.Header__sitename}>
            <div className={styles.Sitename}>
              <Media>
                <MediaFigure>
                  <img src={img} className={styles.Sitename__logo} />
                </MediaFigure>

                <MediaBody>
                  <Block>
                    <div className={styles.Sitename__title}>Vaccine Answers</div>

                    <Sup>
                      <div className={styles.Sitename__supplement}>Manitoba</div>
                    </Sup>
                  </Block>

                  <div className={styles.Sitename__subtitle}>A reliable source of information about vaccines and vaccination in Canada</div>
                </MediaBody>
              </Media>
            </div>
          </div>

          <div className={styles.Header__actions}>
            <Block>
              <SearchBar location={location} />
            </Block>

            <CurrentUser />
          </div>
        </div>
      </Wrap>
    </header>
  )
}

export default Header
