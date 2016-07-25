import React from 'react'
import {connect} from 'react-redux'

import {Block} from '../Layouts'
import {Button, TextInput, TextArea} from '../UI'
import {createQuestion} from '../../store/questionsActions'

class QuestionForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: {},
      data: {
        posterName: props.user.name,
        posterEmail: props.user.email,
        question: ''
      }
    }

    this.change = this.change.bind(this)
    this.create = this.create.bind(this)
  }

  componentWillReceiveProps (newProps) {
    const {errors, isUpdating} = newProps.question

    if (!isUpdating) {
      if (Object.keys(errors).length === 0 && errors.constructor === Object) {
        this.setState({
          data: {
            posterName: newProps.user.name,
            posterEmail: newProps.user.email,
            question: ''
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
    const {createQuestion} = this.props

    createQuestion(this.state.data)
  }

  render () {
    const {isUpdating} = this.props.question

    return (
      <div>
        <Block>
          <TextInput label="Your name"
            value={this.state.data.posterName}
            error={this.state.errors.posterName}
            placeholder="e.g. Casey"
            disabled={isUpdating}
            changeCallback={(v) => this.change('posterName', v)} />
        </Block>

        <Block>
          <TextInput label="Your email"
            value={this.state.data.posterEmail}
            error={this.state.errors.posterEmail}
            placeholder="e.g. casey@gmail.com"
            disabled={isUpdating}
            changeCallback={(v) => this.change('posterEmail', v)} />
        </Block>

        <Block n={1.5}>
          <TextArea label="Your question"
            value={this.state.data.question}
            error={this.state.errors.question}
            placeholder="e.g. which vaccines are safe for kids under 5 years?"
            disabled={isUpdating}
            changeCallback={(v) => this.change('question', v)} />
        </Block>

        <Button
          onClick={this.create}
          disabled={isUpdating}>Ask question</Button>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      user: state.auth.user,
      question: state.question
    }
  },
  dispatch => {
    return {
      createQuestion: (data) => {
        dispatch(createQuestion(data, 'You question has been sent, we will get back to you very soon :)'))
      }
    }
  }
)(QuestionForm)
