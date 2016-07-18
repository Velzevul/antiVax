import React from 'react'
import {Link} from 'react-router'

import {Wrap, Grid, GridItem} from '../Layouts'
import styles from './MainNav.css'

const navItems = [
  {
    label: 'Questions & Answers',
    path: `${PUBLIC_PATH}/questions`
  },
  {
    label: 'About Vaccines',
    path: `${PUBLIC_PATH}/about-vaccines`
  },
  {
    label: 'Vaccine Safety',
    path: `${PUBLIC_PATH}/vaccine-safety`
  },
  {
    label: 'Vaccination Schedule',
    path: `${PUBLIC_PATH}/vaccination-schedule`
  },
  {
    label: 'Blog',
    path: `${PUBLIC_PATH}/blog`
  }
]

const MainNav = ({
  location
}) => {
  const routeStateMap = {
    'questions': {left: 0, opacity: 1},
    'about-vaccines': {left: '20%', opacity: 1},
    'vaccine-safety': {left: '40%', opacity: 1},
    'vaccination-schedule': {left: '60%', opacity: 1},
    'blog': {left: '80%', opacity: 1}
  }

  const currentSection = location.pathname.split('/')[2]
  const indicatorStyle = routeStateMap[currentSection]

  return (
    <div className={styles.Bg}>
      <Wrap maxWidth="80rem">
        <div className={styles.MainNav}>
          <div style={indicatorStyle} className={styles.MainNav__indicator}></div>

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
