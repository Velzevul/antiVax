import React from 'react'
import {Link} from 'react-router'

const baseline = 0.750
import styles from './Button.css'

const Button = ({
  children,
  onClick,
  fullWidth = false,
  small = false,
  large = false,
  disabled = false,
  to = null,
  href = null,
  inverse = false,
  theme = 'accent1',
  extraClassNames
}) => {
  let style = {
    padding: `${baseline * 0.6}rem ${baseline * 1.5}rem`,
    lineHeight: `${1.5 * baseline}rem`,
    fontSize: `${1.083 * baseline}rem`
  }

  if (small) {
    style = {
      padding: `${baseline * 0.3}rem ${baseline * 1}rem`,
      lineHeight: `${1.5 * baseline}rem`,
      fontSize: `${0.917 * baseline}rem`
    }
  }

  if (large) {
    style = {
      padding: `${baseline * 1}rem ${baseline * 1.5}rem`,
      lineHeight: `${1.5 * baseline}rem`,
      fontSize: `${1.083 * baseline}rem`
    }
  }

  if (fullWidth) {
    style.width = '100%'
  }

  let className = []

  className.push(inverse ? styles.InverseButton : styles.Button)

  switch (theme) {
    case 'error':
      className.push(inverse ? styles.InverseButton_error : styles.Button_error)
      break
    case 'accent':
    default:
      className.push(inverse ? styles.InverseButton_accent : styles.Button_accent)
      break
  }

  if (to) {
    return (
      <Link style={style} disabled={disabled} className={`${className.join(' ')} ${extraClassNames}`} to={to}>{children}</Link>
    )
  } else if (href) {
    return (
      <a style={style} disabled={disabled} className={`${className.join(' ')} ${extraClassNames}`} href={href}>{children}</a>
    )
  } else {
    return (
      <button style={style} disabled={disabled} className={`${className.join(' ')} ${extraClassNames}`} onClick={onClick}>{children}</button>
    )
  }
}

export default Button
