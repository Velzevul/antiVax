import React from 'react'
import {Link} from 'react-router'

import {Flex, List, ListItem} from '../Layouts'

import styles from './MainNavMobile.css'

const MainNavMobile = ({
  rootSections,
  sections,
  toggleMainMenu,
  mainMenuIsOpen
}) => {
  return (
    <div>
      <div className={`${styles.Panel}
        ${mainMenuIsOpen ? styles.Panel_open : ''}`}>
        <div className={styles.Panel__header}>
          <Flex
            justifyContent="space-between"
            alignItems="center">
            <div className={styles.Panel__title}>Navigation</div>

            <button
              className={styles.Panel__closeBtn}
              onClick={toggleMainMenu} />
          </Flex>
        </div>

        <div className={styles.Panel__body}>
          <div className={styles.Navigation}>
            <List n={1.5}>
              {rootSections.map(s => {
                let subnavigation = ''
                if (s.sectionType === 'parent') {
                  const subsections = sections.filter(sub => s.children.indexOf(sub._id) !== -1)

                  subnavigation = (
                    <div className={styles.Subnavigation}>
                      {subsections.map(sub =>
                        <ListItem
                          key={sub._id}
                          n={1.5}>
                          <Link
                            onClick={toggleMainMenu}
                            className={styles.Subnavigation__item}
                            activeClassName={styles.Subnavigation__item_active}
                            to={`/${s.url}/${sub.url}`}>{sub.title}</Link>
                        </ListItem>
                      )}
                    </div>
                  )
                }

                return (
                  <div key={s._id}>
                    <ListItem n={1.5}>
                      <Link
                        onClick={toggleMainMenu}
                        className={styles.Navigation__item}
                        activeClassName={styles.Navigation__item_active}
                        to={`/${s.url}`}>{s.title}</Link>
                    </ListItem>

                    {subnavigation}
                  </div>
                )
              })}
            </List>
          </div>
        </div>
      </div>

      {mainMenuIsOpen
        ? (
          <div
            onClick={toggleMainMenu}
            className={styles.Overlay} />
        )
        : ''
      }
    </div>
  )
}

export default MainNavMobile
