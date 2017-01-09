import React from 'react'
import {Link} from 'react-router'

import styles from './Heading1.css'

const Heading1 = ({
  children,
  linkTo = null,
  underline
}) => {
  if (linkTo) {
    return (
      <Link
        to={linkTo}
        className={`${styles.Heading1}
          ${styles.Heading1_link}
          ${underline ? styles.Heading1_underline : ''}`}>{children}</Link>
    )
  } else {
    return (
      <h1 className={`${styles.Heading1}
        ${underline ? styles.Heading1_underline : ''}`}>{children}</h1>
    )
  }
}

export default Heading1
