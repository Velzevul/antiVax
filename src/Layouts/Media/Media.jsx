import React from 'react'

import {baseline} from '../../config.js'
import styles from './Media.css'

const Media = ({
  alignItems = 'flex-start',
  extraClassNames = '',
  children
}) => {
  const style = {
    alignItems
  }

  return (
    <div style={style} className={`${styles.media} ${extraClassNames}`}>
      {children}
    </div>
  )
}

const MediaBody = ({
  extraClassNames = '',
  children
}) => {
  return (
    <div className={`${styles.media__body} ${extraClassNames}`}>
      {children}
    </div>
  )
}

const MediaFigure = ({
  n = 1,
  extraClassNames = '',
  children
}) => {
  const style = {
    marginRight: baseline * n
  }

  return (
    <div style={style} className={`${styles.media__figure} ${extraClassNames}`}>
      {children}
    </div>
  )
}

export {Media, MediaBody, MediaFigure}
