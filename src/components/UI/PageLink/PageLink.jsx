import React from 'react'
import {Link} from 'react-router'

import styles from './PageLink.css'

const PageLink = ({
  children,
  extraClassNames,
  to
}) => {
  return (
    <Link className={`${styles.pageLink} ${extraClassNames}`} to={to}>{children}</Link>
  )
}

export default PageLink
