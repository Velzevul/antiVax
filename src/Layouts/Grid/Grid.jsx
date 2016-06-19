import React from 'react'

import {baseline} from '../../config.js'

const Grid = ({
  gutter = 0,
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  extraClassNames = '',
  children
}) => {
  const style = {
    width: '100%',
    display: 'flex',
    alignItems,
    justifyContent,
    marginLeft: -baseline * gutter / 2,
    marginRight: -baseline * gutter / 2
  }

  return (
    <div style={style} className={extraClassNames}>
      {children}
    </div>
  )
}

const GridItem = ({
  span = 0,
  outOf = 12,
  gutter = 0,
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
    <div style={style} className={extraClassNames}>
      {children}
    </div>
  )
}

export {Grid, GridItem}
