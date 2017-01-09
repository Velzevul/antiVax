import React from 'react'
import {Link} from 'react-router'

import styles from './Heading3.css'

const Heading3 = ({
  children,
  linkTo = null
}) => {
  if (linkTo) {
    return (
      <Link to={linkTo} className={`${styles.Heading3} ${styles.Heading3_link}`}>{children}</Link>
    )
  } else {
    return (
      <h2 className={styles.Heading3}>{children}</h2>
    )
  }
}

export default Heading3
