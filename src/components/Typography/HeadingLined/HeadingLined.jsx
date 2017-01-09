import React from 'react'

import styles from './HeadingLined.css'

const HeadingLined = ({
  children
}) => {
  return (
    <div className={styles.HeadingLined}>
      <h1 className={styles.HeadingLined__title}>{children}</h1>
    </div>
  )
}

export default HeadingLined
