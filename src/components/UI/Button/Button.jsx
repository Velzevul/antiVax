import React from 'react'
import {Link} from 'react-router'

import styles from './Button.css'

const Button = ({
  children,
  onClick,
  to = null,
  disabled = false,
  theme = 'accent1',
  hasPrefix = false,
  hasSuffix = false
}) => {
  if (to) {
    return (
      <Link
        className={`${styles.Button}
        ${theme === 'accent1' ? styles.Button_accent1 : null}
        ${theme === 'accent2' ? styles.Button_accent2 : null}
        ${hasPrefix ? styles.Button_hasPrefix : null}
        ${hasSuffix ? styles.Button_hasSuffix : null}`}
        to={to}>{children}</Link>
    )
  } else {
    return (
      <button
        className={`${styles.Button}
        ${theme === 'accent1' ? styles.Button_accent1 : null}
        ${theme === 'accent2' ? styles.Button_accent2 : null}
        ${hasPrefix ? styles.Button_hasPrefix : null}
        ${hasSuffix ? styles.Button_hasSuffix : null}`}
        disabled={disabled}
        onClick={onClick}>{children}</button>
    )
  }
}

export default Button
