import React from 'react'
import {Link} from 'react-router'

import {Wrap, Grid, GridItem} from '../../Layouts'
import styles from './MainNav.css'
import {prefix} from '../../config'

const navItems = [
  {
    label: 'Questions & Answers',
    path: `${prefix}/questions`
  },
  {
    label: 'About Vaccines',
    path: `${prefix}/about-vaccines`
  },
  {
    label: 'Vaccine Safety',
    path: `${prefix}/vaccine-safety`
  },
  {
    label: 'Vaccination Schedule',
    path: `${prefix}/vaccination-schedule`
  },
  {
    label: 'Blog',
    path: `${prefix}/blog`
  }
]

const MainNav = ({
  location
}) => {
  const routeStateMap = {
    'questions': styles.MainNav__indicator_0,
    'about-vaccines': styles.MainNav__indicator_1,
    'vaccine-safety': styles.MainNav__indicator_2,
    'vaccination-schedule': styles.MainNav__indicator_3,
    'blog': styles.MainNav__indicator_4
  }

  const pathPartIndex = prefix.length ? 2 : 1
  const currentSection = location.pathname.split('/')[pathPartIndex]
  const indicatorStyle = routeStateMap[currentSection]

  return (
    <div className={styles.Bg}>
      <Wrap maxWidth="80rem">
        <div className={styles.MainNav}>
          <div className={`${styles.MainNav__indicator} ${indicatorStyle}`}></div>

          <Grid>
            {navItems.map(item =>
              <GridItem key={item.path}>
                <Link to={item.path} className={styles.MainNav__item}
                  activeClassName={styles.MainNav__item_active}>{item.label}</Link>
              </GridItem>
            )}
          </Grid>
        </div>
      </Wrap>
    </div>
  )
}

export default MainNav
