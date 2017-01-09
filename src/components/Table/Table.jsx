import React from 'react'

import styles from './Table.css'

const Row = ({
  bb = false,
  bt = false,
  br = false,
  bl = false,
  children
}) => {
  let classNames = [styles.Row]
  if (bt) { classNames.push(styles.bt) }
  if (bb) { classNames.push(styles.bb) }
  if (bl) { classNames.push(styles.bl) }
  if (br) { classNames.push(styles.br) }

  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  )
}

const Column = ({
  bb = false,
  bt = false,
  br = false,
  bl = false,
  width,
  children
}) => {
  let style = {}
  if (width === 'stretch') {
    style.flex = 1
  } else {
    style.width = width
  }

  let classNames = [styles.Column]
  if (bt) { classNames.push(styles.bt) }
  if (bb) { classNames.push(styles.bb) }
  if (bl) { classNames.push(styles.bl) }
  if (br) { classNames.push(styles.br) }

  return (
    <div
      className={classNames.join(' ')}
      style={style}>
      {children}
    </div>
  )
}

const Cell = ({
  heading = false,
  filled = false,
  align = 'center',
  children
}) => {
  let style = {
    textAlign: align
  }

  let classNames = [styles.Cell]
  if (heading) { classNames.push(styles.Cell_heading) }
  if (filled) { classNames.push(styles.Cell_filled) }

  return (
    <div
      style={style}
      className={classNames.join(' ')}>
      {children}
    </div>
  )
}

export {Row, Column, Cell}
