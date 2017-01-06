import React from 'react'

const baseline = 0.750
import styles from './Button.css'

const Button = ({
  children,
  onClick,
  disabled = false,
  theme = 'accent1',
  hasPrefix = false,
  hasSuffix = false
}) => {
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

export default Button
