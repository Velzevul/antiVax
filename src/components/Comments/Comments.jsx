import React from 'react'

import Block from '../Layouts/Block'
import Comment from '../Comment'
import CommentForm from '../CommentForm'
import Heading2 from '../Typography/Heading2'

const Comments = ({
  comments,
  blogpost
}) => {
  let body = ''
  if (comments.length > 0) {
    body = (
      <div>
        <Block n={1.5}>
          <Heading2>Comments</Heading2>
        </Block>

        <Block n={6}>
          {comments.map((c, index) =>
            <Comment key={index} blogpost={blogpost} comment={c} />
          )}
        </Block>
      </div>
    )
  }

  return (
    <div>
      <Block n={6}>
        <CommentForm blogpost={blogpost} />
      </Block>

      {body}
    </div>
  )
}

export default Comments
