import React from 'react'
import Time from 'react-time'

import Block from '../Layouts/Block'
import {List, ListItem} from '../Layouts/List'
import Content from '../Typography/Content'
import styles from './Comment.css'
import CommentReply from '../CommentReply'
import CommentReplyForm from '../CommentReplyForm'
import Link from '../UI/Link'

class Comment extends React.Component {
  constructor (props) {
    super(props)

    this.toggleForm = this.toggleForm.bind(this)

    this.state = {
      showReplyForm: false
    }
  }

  toggleForm () {
    this.setState({
      showReplyForm: !this.state.showReplyForm
    })
  }

  render () {
    const {comment, blogpost} = this.props
    const sortedReplies = comment.replies.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })

    let form = ''
    if (this.state.showReplyForm) {
      form = (
        <Block n={comment.replies.length > 0 ? 3 : 0}>
          <CommentReplyForm
            cancelCallback={() => this.toggleForm()}
            comment={comment}
            blogpostId={blogpost._id} />
        </Block>
      )
    }

    let replies = ''
    if (comment.replies.length > 0) {
      replies = (
        <List n={1.5}>
          {sortedReplies.map((r, index) =>
            <ListItem n={1.5} key={index}>
              <CommentReply reply={r} />
            </ListItem>
          )}
        </List>
      )
    }

    return (
      <div className={styles.Comment}>
        <Block n={this.state.showReplyForm || comment.replies.length > 0 ? 3 : 0}>
          <Block n={1}>
            <div className={styles.Comment__info}>by {comment.lastModifiedBy} on <Time value={comment.lastModifiedAt} format="MMM Do, h:mA" /></div>
          </Block>

          <Block n={1}>
            <Content text={comment.content} />
          </Block>

          <Link small onClick={this.toggleForm}>Reply to this comment</Link>
        </Block>

        <div className={styles.Comment__replies}>
          {form}

          {replies}
        </div>
      </div>
    )
  }
}

export default Comment
