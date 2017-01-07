import React from 'react'

import {TextInput, TextArea, Button} from '../UI'
import {Flex, LabeledInput, Block} from '../Layouts'

import styles from './AskQuestionDesktop.css'

class AskQuestionDesktop extends React.Component {
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
      <div className={styles.AskQuestion}>
        <div className={styles.AskQuestion__header}>
          <div className={styles.AskQuestion__title}>Ask a Question</div>
        </div>

        <div className={styles.AskQuestion__body}>
          <Block n={0.5}>
            <div className={styles.AskQuestion__text}>if you would rather ask your question than search the entire website, don’t hesitate to send your question to us!</div>
          </Block>

          <Flex justifyContent="flex-end">
            <div className={styles.AskQuestion__signature}>– Dr. Jennifer Potter, MD</div>
          </Flex>
        </div>

        <form className={styles.AskQuestion__form}>
          <Block>
            <LabeledInput
              label="Your name"
              error={this.state.errors.posterName}
              input={
                <TextInput
                  value={this.state.data.posterName}
                  error={this.state.errors.posterName}
                  placeholder="e.g. Casey"
                  disabled={isUpdating}
                  changeCallback={(v) => this.change('posterName', v)} />
              } />
          </Block>

          <Block>
            <LabeledInput
              label="Your email"
              error={this.state.errors.posterEmail}
              input={
                <TextInput
                  value={this.state.data.posterEmail}
                  error={this.state.errors.posterEmail}
                  placeholder="e.g. casey@gmail.com"
                  disabled={isUpdating}
                  changeCallback={(v) => this.change('posterEmail', v)} />
              } />
          </Block>

          <Block n={1.5}>
            <LabeledInput
              label="Your question"
              error={this.state.errors.question}
              input={
                <TextArea
                  value={this.state.data.question}
                  error={this.state.errors.question}
                  placeholder="e.g. which vaccines are safe for kids under 5 years?"
                  disabled={isUpdating}
                  changeCallback={(v) => this.change('question', v)} />
              } />
          </Block>

          <Button
            onClick={this.create}
            disabled={isUpdating}>Ask question</Button>
        </form>
      </div>
    )
  }
}

export default AskQuestionDesktop
