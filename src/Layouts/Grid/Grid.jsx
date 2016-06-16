import React from 'react'

import {baseline} from '../../config.js'
import styles from './Grid.css'

const Grid = ({
  gutter = 0,
  justifyItems = 'flex-start',
  extraClassNames = '',
  children
}) => {
  const style = {
    justifyItems,
    marginLeft: -baseline * gutter / 2,
    marginRight: -baseline * gutter / 2
  }

  return (
    <div style={style} className={`${styles.grid} ${extraClassNames}`}>
      {children}
    </div>
  )
}

const GridItem = ({
  span = 0,
  outOf = 12,
  gutter = 1,
  extraClassNames = '',
  children
}) => {
  let style = {
    marginLeft: baseline * gutter / 2,
    marginRight: baseline * gutter / 2,
    flex: '1'
  }

  if (span && outOf) {
    style = Object.assign({}, style, {
      flex: '0 0 auto',
      width: `${100 * span / outOf}%`
    })
  }

  return (
    <div style={style} className={`${style.grid__item} ${extraClassNames}`}>
      {children}
    </div>
  )
}

export {Grid, GridItem}
