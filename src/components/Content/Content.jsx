import React from 'react'

import styles from './Content.css'

const Content = ({
  text = ''
}) => {
  return (
    <div
      className={styles.Content}
      dangerouslySetInnerHTML={{__html: text}} />
  )
}

export default Content
