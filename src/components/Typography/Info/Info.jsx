import React from 'react'

import styles from './Info.css'

const Info = ({
  children
}) => {
  return (
    <div className={styles.Info}>{children}</div>
  )
}

export default Info
