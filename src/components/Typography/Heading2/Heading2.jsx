import React from 'react'
import {Link} from 'react-router'

import styles from './Heading2.css'

const Heading2 = ({
  children,
  to = null,
  underline = false
}) => {
  if (to) {
    return (
      <Link
        className={`${styles.Heading2}
          ${styles.Heading2_link}
          ${underline ? styles.Heading2_underline : ''}`}
        to={to}>{children}</Link>
    )
  } else {
    return (
      <h2
        className={`${styles.Heading2}
        ${underline ? styles.Heading2_underline : ''}`}>{children}</h2>
    )
  }
}

export default Heading2
