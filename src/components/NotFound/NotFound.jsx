import React from 'react'

import styles from './NotFound.css'
import {Block} from '../Layouts'

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Block n={3}>
        <div className={styles.NotFound__title}>404</div>
      </Block>

      <div className={styles.NotFound__body}>Sorry, but the page you are looking for does not seem to exist...</div>
    </div>
  )
}

export default NotFound
