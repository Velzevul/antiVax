import React from 'react'

import {Block} from '../Layouts'
import Comment from '../Comment'
import CommentForm from '../CommentForm'

import styles from './Comments.css'

const Comments = ({
  article
}) => {
  return (
    <div>
      <Block n={6}>
        <CommentForm article={article} />
      </Block>

      {article.comments.length > 0
        ? (
          <div className={styles.Comments}>
            <Block n={1.5}>
              <div className={styles.Comments__title}>Comments</div>
            </Block>

            <Block n={1.5}>
              {article.comments.map((c, index) =>
                <Comment
                  key={index}
                  article={article}
                  comment={c} />
              )}
            </Block>
          </div>
        )
        : ''
      }
    </div>
  )
}

export default Comments
