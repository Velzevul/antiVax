import React from 'react'

import {Block} from '../Layouts'
import {Button, TextInput, TextArea} from '../UI'

class QuestionForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      formInvalid: true,
      nameError: null,
      emailError: null,
      questionError: null,
      name: '',
      email: '',
      question: ''
    }

    this.typeName = this.typeName.bind(this)
    this.typeEmail = this.typeEmail.bind(this)
    this.typeQuestion = this.typeQuestion.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  typeName (value) {
    this.setState({
      name: value,
      nameError: null,
      formInvalid: false
    })
  }

  typeEmail (value) {
    this.setState({
      email: value,
      emailError: null,
      formInvalid: false
    })
  }

  typeQuestion (value) {
    this.setState({
      question: value,
      questionError: null,
      formInvalid: false
    })
  }

  submitForm () {
    let newState = {}

    if (this.state.name === '') {
      newState.nameError = 'cannot be empty'
    }

    if (this.state.email === '') {
      newState.emailError = 'cannot be empty'
    }

    if (this.state.question === '') {
      newState.questionError = 'cannot be empty'
    }

    if (newState.questionError ||
      newState.nameError ||
      newState.emailError) {
      newState.formInvalid = true
    } else {
      newState.name = ''
      newState.email = ''
      newState.question = ''

      console.log('--- send email --->')
    }

    this.setState(newState)
  }

  render () {
    return (
      <div>
        <Block>
          <TextInput label="Your name"
            value={this.state.name}
            error={this.state.nameError}
            placeholder="e.g. Casey"
            changeCallback={this.typeName} />
        </Block>

        <Block>
          <TextInput label="Your email"
            value={this.state.email}
            error={this.state.emailError}
            placeholder="e.g. casey@gmail.com"
            changeCallback={this.typeEmail} />
        </Block>

        <Block n={1.5}>
          <TextArea label="Your question"
            value={this.state.question}
            error={this.state.questionError}
            placeholder="which vaccines are safe for kids under 5 years?"
            changeCallback={this.typeQuestion} />
        </Block>

        <Button onClick={this.submitForm}>Ask Question</Button>
      </div>
    )
  }
}

export default QuestionForm
