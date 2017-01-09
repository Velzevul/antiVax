import React from 'react'
import {connect} from 'react-redux'

import {Block, ListInline, ListInlineItem} from '../Layouts'
import TextArea from '../UI/TextArea'
import LinkButton from '../UI/LinkButton'
import Button from '../UI/Button'
import LabeledInput from '../Layouts/LabeledInput'

import {createReply} from '../../store/repliesActions'

class CommentReplyForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: {
        content: ''
      },
      errors: {}
    }

    this.change = this.change.bind(this)
    this.create = this.create.bind(this)
  }

  componentWillReceiveProps (newProps) {
    const {errors, isUpdating} = newProps.comment.newReply

    if (!isUpdating) {
      if (Object.keys(errors).length === 0 && errors.constructor === Object) {
        this.setState({
          data: {
            content: ''
          }
        })
      } else {
        this.setState({errors})
      }
    }
  }

  change (prop, value) {
    const newData = Object.assign({}, this.state.data, {
      [prop]: value
    })

    const newErrors = Object.assign({}, this.state.errors, {
      [prop]: null
    })

    this.setState({
      data: newData,
      errors: newErrors
    })
  }

  create () {
    const {createReply, cancelCallback} = this.props

    createReply(this.state.data)
    cancelCallback()
  }

  render () {
    const {comment: {newReply: {isUpdating}}, cancelCallback} = this.props

    return (
      <div>
        <Block n={1.5}>
          <LabeledInput
            label="Your reply"
            error={this.state.errors.content}
            input={(
              <TextArea
                value={this.state.data.content}
                error={this.state.errors.content}
                disabled={isUpdating}
                changeCallback={(v) => this.change('content', v)} />
            )} />
        </Block>

        <ListInline n={2}>
          <ListInlineItem n={2}>
            <Button
              onClick={this.create}
              disabled={isUpdating}>Post reply</Button>
          </ListInlineItem>

          <ListInlineItem n={2}>
            <LinkButton
              onClick={cancelCallback}>Cancel</LinkButton>
          </ListInlineItem>
        </ListInline>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch, ownProps) => {
    const {articleId, comment} = ownProps

    return {
      createReply: data => {
        dispatch(createReply(data, articleId, comment._id))
      }
    }
  }
)(CommentReplyForm)
