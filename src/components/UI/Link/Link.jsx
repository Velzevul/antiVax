import React from 'react'
import {Link as NativeLink} from 'react-router'

import styles from './Link.css'

const baseline = 0.750

const Link = ({
  children,
  small,
  to,
  disabled,
  onClick,
  href,
  theme = 'accent1'
}) => {
  let style = {
    fontSize: '1rem'
  }

  if (small) {
    style = {
      fontSize: `${1.167 * baseline}rem`
    }
  }

  let className = []
  className.push(styles.Link)
  switch (theme) {
    case 'error':
      className.push(styles.Link_error)
      break
    case 'accent':
    default:
      className.push(styles.Link_accent)
      break
  }

  if (to) {
    return <NativeLink
      style={style}
      className={`${className.join(' ')}`}
      disabled={disabled}
      to={to}>{children}</NativeLink>
  } else if (onClick) {
    return <button
      style={style}
      className={`${className.join(' ')}`}
      disabled={disabled}
      onClick={onClick}>{children}</button>
  } else if (href) {
    return <a
      style={style}
      href={href}
      disabled={disabled}
      className={`${className.join(' ')}`}>{children}</a>
  }
}

export default Link
