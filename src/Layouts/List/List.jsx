import React from 'react'

import {baseline} from '../../config.js'
import styles from './List.css'

const List = ({
  n = 1,
  extraClassNames = '',
  children
}) => {
  const style = {
    marginBottom: -baseline * n
  }

  return (
    <ul style={style} className={`${styles.list} ${extraClassNames}`}>
      {children}
    </ul>
  )
}

const ListItem = ({
  n = 1,
  extraClassNames = '',
  children
}) => {
  const style = {
    marginBottom: baseline * n
  }

  return (
    <li style={style} className={`${styles.list__item} ${extraClassNames}`}>
      {children}
    </li>
  )
}

export {List, ListItem}
