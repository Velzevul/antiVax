import React from 'react'
import {Link} from 'react-router'

import styles from './Breadcrumbs.css'

const Breadcrumbs = ({
  items
}) => {
  return (
    <div className={styles.Breadcrumbs}>
      {items.map(i =>
        <Link to={i.path} className={styles.Breadcrumbs__item}>{i.label}</Link>
      )}
    </div>
  )
}

export default Breadcrumbs
