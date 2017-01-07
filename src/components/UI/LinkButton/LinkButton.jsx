import React from 'react'
import {Link} from 'react-router'

import styles from './LinkButton.css'

const LinkButton = ({
  children,
  onClick,
  to = null,
  disabled = false,
  theme = 'accent1'
}) => {
  if (to) {
    return (
      <Link
        className={`${styles.LinkButton}
        ${theme === 'accent1' ? styles.LinkButton_accent1 : null}
        ${theme === 'accent2' ? styles.LinkButton_accent2 : null}`}
        disabled={disabled}
        to={to}>{children}</Link>
    )
  } else {
    return (
      <button
        className={`${styles.LinkButton}
        ${theme === 'accent1' ? styles.LinkButton_accent1 : null}
        ${theme === 'accent2' ? styles.LinkButton_accent2 : null}`}
        disabled={disabled}
        onClick={onClick}>{children}</button>
    )
  }
}

export default LinkButton
