import React from 'react'
import {Link} from 'react-router'

import {baseline} from '../../config.js'
import styles from './Button.css'

const Button = ({
  children,
  pv = 0.5,
  ph = 1.5,
  linkTo = null,
  extraClassNames,
  onClick = null
}) => {
  const style = {
    padding: `${baseline * pv}px ${baseline * ph}px`
  }

  if (linkTo) {
    return (
      <Link style={style} className={`${styles.button} ${extraClassNames}`} to={linkTo}>{children}</Link>
    )
  } else {
    return (
      <button style={style} className={`${styles.button} ${extraClassNames}`} onClick={onClick}>{children}</button>
    )
  }
}

export default Button
