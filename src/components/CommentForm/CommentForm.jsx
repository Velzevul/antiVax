import React from 'react'
import {connect} from 'react-redux'

import Block from '../Layouts/Block'
import TextArea from '../UI/TextArea'
import Button from '../UI/Button'

import {createComment} from '../../store/commentsActions'

class CommentForm extends React.Component {
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
    const {errors, isUpdating} = newProps.blogpost.newComment

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
    const {createComment} = this.props

    createComment(this.state.data)
  }

  render () {
    const {blogpost: {newComment: {isUpdating}}} = this.props

    return (
      <div>
        <Block n={1}>
          <TextArea
            label="Post a comment"
            value={this.state.data.content}
            error={this.state.errors.content}
            disabled={isUpdating}
            changeCallback={(v) => this.change('content', v)} />
        </Block>

        <Button
          onClick={this.create}
          disabled={isUpdating}>Post comment</Button>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch, ownProps) => {
    const {blogpost} = ownProps

    return {
      createComment: data => {
        dispatch(createComment(data, blogpost._id))
      }
    }
  }
)(CommentForm)
