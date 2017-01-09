import React from 'react'
import Time from 'react-time'

import styles from './CommentReply.css'

import Content from '../Typography/Content'
import {Block} from '../Layouts'

const CommentReply = ({
  reply
}) => {
  return (
    <div className={styles.CommentReply}>
      <Block n={0.5}>
        <div className={styles.CommentReply__info}>by {reply.createdBy} on <Time value={reply.createdAt} format="MMM Do, h:mA" /></div>
      </Block>

      <Content text={reply.content} />
    </div>
  )
}

export default CommentReply
