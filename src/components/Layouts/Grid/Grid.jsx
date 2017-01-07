import React from 'react'

const baseline = 0.750

const Grid = ({
  gutter = 0,
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  children
}) => {
  const style = {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems,
    justifyContent
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

const GridItem = ({
  span = 0,
  outOf = 12,
  gutter = 0,
  children
}) => {
  let style = {
    marginRight: `${baseline * gutter}rem`,
    flex: '1'
  }

  if (span && outOf) {
    style = Object.assign({}, style, {
      flex: '0 0 auto',
      width: `${100 * span / outOf}%`
    })
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export {Grid, GridItem}
