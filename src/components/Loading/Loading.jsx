import React from 'react'

import styles from './Loading.css'
import {Spinner} from '../UI'

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <Spinner />
    </div>
  )
}

export default Loading
