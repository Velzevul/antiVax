import React from 'react'
import {Link} from 'react-router'

import {Block} from '../../Layouts'
import {Heading2} from '../../Typography'

import styles from './SideNav.css'

const SideNav = ({
  title,
  items
}) => {
  return (
    <aside className={styles.SideNav}>
      <Block n={2}>
        <div className={styles.SideNav__title}>
          <Heading2>{title}</Heading2>
        </div>
      </Block>

      {items.map(i =>
        <Link to={i.path}
          key={i.path}
          activeClassName={styles.SideNav__item_active}
          className={styles.SideNav__item}>{i.label}</Link>
      )}
    </aside>
  )
}

export default SideNav
