import React from 'react'
import {Link} from 'react-router'

import {Block, List, ListItem} from '../Layouts'
import styles from './FooterNav.css'

const FooterNav = ({
  items,
  title
}) => {
  const menu = items.map(i => {
    return (
      <ListItem key={i.label}>
        <div className={`${styles.FooterNav__item} ${i.emph ? styles.FooterNav__item_emph : null}`}>
          {i.path
            ? <Link className={styles.FooterNav__link} to={i.path}>{i.label}</Link>
            : i.label
          }
        </div>
      </ListItem>
    )
  })

  return (
    <div className={styles.FooterNav}>
      <Block>
        <div className={styles.FooterNav__title}>{title}</div>
      </Block>

      <List>
        {menu}
      </List>
    </div>
  )
}

export default FooterNav
