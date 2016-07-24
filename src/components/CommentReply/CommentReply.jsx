import React from 'react'
import Time from 'react-time'

import styles from './CommentReply.css'
import Content from '../Typography/Content'
import Block from '../Layouts/Block'

const CommentReply = ({
  reply
}) => {
  return (
    <div className={styles.CommentReply}>
      <Block n={1}>
        <div className={styles.CommentReply__info}>{reply.lastModifiedBy} on <Time value={reply.lastModifiedAt} format="MMM Do, h:mA" /></div>
      </Block>

      <Content text={reply.content} />
    </div>
  )
}

export default CommentReply
