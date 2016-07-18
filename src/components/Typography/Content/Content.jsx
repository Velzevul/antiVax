import React from 'react'

import styles from './Content.css'

const Content = ({
  children,
  extraClassNames = '',
  text = ''
}) => {
  return (
    <div className={`${styles.Content} ${extraClassNames}`}
         dangerouslySetInnerHTML={{__html: text}}></div>
  )
}

export default Content
