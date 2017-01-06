import React from 'react'
import {Link} from 'react-router'

import {Flex} from '../Layouts'
import Wrapper from '../Wrapper'

import styles from './MainNavDesktop.css'

const MainNavDesktop = ({
  currentSection,
  rootSections,
  currentSubsections
}) => {
  let subNav = ''
  if (currentSubsections) {
    subNav = (
      <div className={styles.Subnavigation}>
        <Wrapper>
          <Flex>
            {currentSubsections.map((s, index) =>
              <Link
                key={index}
                className={styles.Subnavigation__item}
                activeClassName={styles.Subnavigation__item_active}
                to={`/${currentSection.url}/${s.url}`}>{s.title}</Link>
            )}
          </Flex>
        </Wrapper>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.Navigation}>
        <Wrapper>
          <Flex>
            {rootSections.map((s, i) => {
              let activeClassNames = [styles.Navigation__item_active]
              if (s.sectionType === 'parent') {
                activeClassNames.push(styles.Navigation__item_parent_active)
              }

              return (
                <Link
                  key={i}
                  to={`/${s.url}`}
                  className={styles.Navigation__item}
                  activeClassName={activeClassNames.join(' ')}>{s.title}</Link>
              )
            })}
          </Flex>
        </Wrapper>
      </div>

      {subNav}
    </div>
  )
}

export default MainNavDesktop
