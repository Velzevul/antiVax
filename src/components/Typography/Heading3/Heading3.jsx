import React from 'react'
import {Link} from 'react-router'

import styles from './Heading3.css'

const Heading3 = ({
  children,
  extraClassNames = '',
  linkTo = null
}) => {
  if (linkTo) {
    return (
      <Link to={linkTo} className={`${styles.Heading3} ${styles.Heading3Link} ${extraClassNames}`}>{children}</Link>
    )
  } else {
    return (
      <h2 className={`${styles.Heading3} ${extraClassNames}`}>{children}</h2>
    )
  }
}

export default Heading3
