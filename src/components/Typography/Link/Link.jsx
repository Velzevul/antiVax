import React from 'react'
import {Link as ReactLink} from 'react-router'

import styles from './Link.css'

const Link = ({
  href,
  to = null,
  inverse = false,
  small = false,
  children
}) => {
  if (to) {
    return (
      <ReactLink
        className={`${styles.Link}
          ${inverse ? styles.Link_inverse : ''}
          ${small ? styles.Link_small : ''}`}
        activeClassName={styles.Link_active}
        to={to}
        >{children}</ReactLink>
    )
  } else {
    return (
      <a
        className={`${styles.Link}
          ${inverse ? styles.Link_inverse : ''}
          ${small ? styles.Link_small : ''}`}
        href={href}>{children}</a>
    )
  }
}

export default Link
