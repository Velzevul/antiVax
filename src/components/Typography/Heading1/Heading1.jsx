import React from 'react'
import {Link} from 'react-router'

import styles from './Heading1.css'

const Heading1 = ({
  children,
  extraClassNames = '',
  linkTo = null
}) => {
  if (linkTo) {
    return (
      <Link to={linkTo} className={styles.Heading1Link}>
        <h1 className={`${styles.Heading1} ${extraClassNames}`}>{children}</h1>
      </Link>
    )
  } else {
    return (
      <h1 className={`${styles.Heading1} ${extraClassNames}`}>{children}</h1>
    )
  }
}

export default Heading1
