import React from 'react'

import styles from './Text.css'

const Heading3 = ({
  children
}) => {
  return (
    <div className={styles.Text}>{children}</div>
  )
}

export default Heading3
