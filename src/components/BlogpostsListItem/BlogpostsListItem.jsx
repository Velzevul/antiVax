import React from 'react'
import Time from 'react-time'

import styles from './BlogpostsListItem.css'
import Content from '../Content'
import {Block} from '../Layouts'
import {LinkButton} from '../UI'

const BlogpostsListItem = ({
  blogpost,
  link
}) => {
  return (
    <div className={styles.BlogpostsListItem}>
      <Block n={0.5}>
        <div className={styles.BlogpostsListItem__timestamp}>
          Posted on <Time value={new Date(blogpost.createdAt)} format="MMM Do, h:mA" />
        </div>
      </Block>

      <Block>
        <div className={styles.BlogpostsListItem__title}>{blogpost.title}</div>
      </Block>

      <Block>
        <div className={styles.BlogpostsListItem__snippet}>
          <Content text={blogpost.snippet} />
        </div>
      </Block>

      <LinkButton to={link}>Read full post</LinkButton>
    </div>
  )
}

export default BlogpostsListItem
