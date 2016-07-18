import React from 'react'
import {Link} from 'react-router'

import {Block} from '../Layouts'
import {Heading2} from '../Typography'

import styles from './SideNav.css'

const SideNav = ({
  title,
  articles
}) => {
  return (
    <aside className={styles.SideNav}>
      <Block n={2}>
        <div className={styles.SideNav__title}>
          <Heading2>{title}</Heading2>
        </div>
      </Block>

      {articles.map(i =>
        <Link
          to={`${PUBLIC_PATH}/${i.type.id}/${i.url}`}
          key={i._id}
          activeClassName={styles.SideNav__item_active}
          className={styles.SideNav__item}>
          {i.title}
        </Link>
      )}
    </aside>
  )
}

export default SideNav
