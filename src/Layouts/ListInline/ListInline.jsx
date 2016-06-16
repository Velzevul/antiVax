import React from 'react'

import {baseline} from '../../config.js'
import styles from './ListInline.css'

const ListInline = ({
  n = 1,
  extraClassNames = '',
  children
}) => {
  const style = {
    marginBottom: -baseline * n,
    marginLeft: -baseline * n
  }

  return (
    <ul style={style} className={`${styles.listInline} ${extraClassNames}`}>
      {children}
    </ul>
  )
}

const ListInlineItem = ({
  n = 1,
  extraClassNames = '',
  children
}) => {
  const style = {
    marginBottom: baseline * n,
    marginLeft: baseline * n
  }

  return (
    <li style={style} className={`${styles.listInline__item} ${extraClassNames}`}>
      {children}
    </li>
  )
}

export {ListInline, ListInlineItem}
