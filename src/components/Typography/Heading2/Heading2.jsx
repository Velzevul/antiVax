import React from 'react'
import {Link} from 'react-router'

import styles from './Heading2.css'

const Heading2 = ({
  children,
  extraClassNames = '',
  linkTo = null
}) => {
  if (linkTo) {
    return (
      <Link to={linkTo} className={styles.Heading2Link}>
        <h2 className={`${styles.Heading2} ${extraClassNames}`}>{children}</h2>
      </Link>
    )
  } else {
    return (
      <h2 className={`${styles.Heading2} ${extraClassNames}`}>{children}</h2>
    )
  }
}

export default Heading2
