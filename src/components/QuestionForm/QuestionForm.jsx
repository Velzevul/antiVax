import React from 'react'
import {connect} from 'react-redux'

import {TextInput, TextArea, Button} from '../UI'
import LabeledInput from '../Layouts/LabeledInput'
import Block from '../Layouts/Block'
import {Grid, GridItem} from '../Layouts/Grid'

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
    const {question: {isUpdating}, type, layout} = this.props

    let gridSize = 0
    switch (layout) {
      case 's':
        gridSize = 1
        break
      case 'm':
      case 'l':
      case 'xl':
        gridSize = 2
        break
      default:
        console.error(`unexpected layout type ${layout}`)
    }

    let inputs = ''
    if (type === 'stacked') {
      inputs = (
        <div>
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
        </div>
      )
    } else if (type === 'full') {
      inputs = (
        <Block>
          <Grid gutterBottom={1}>
            <GridItem
              gutterBottom={1}
              span={1}
              outOf={gridSize}>
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
            </GridItem>

            <GridItem
              gutterBottom={1}
              span={1}
              outOf={gridSize}>
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
            </GridItem>
          </Grid>
        </Block>
      )
    }

    return (
      <form>
        {inputs}

        <Block n={1.5}>
          <LabeledInput
            label="Your question"
            error={this.state.errors.question}
            input={
              <TextArea
                value={this.state.data.question}
                error={this.state.errors.question}
                placeholder="e.g., Are there any dangerous side effects to the chicken pox vaccine?"
                disabled={isUpdating}
                changeCallback={(v) => this.change('question', v)} />
            } />
        </Block>

        <Button
          onClick={this.create}
          disabled={isUpdating}>Ask question</Button>
      </form>
    )
  }
}

export default connect(
  state => {
    return {
      user: state.auth.user,
      question: state.question,
      layout: state.ui.layout
    }
  },
  dispatch => {
    return {
      createQuestion: (data) => {
        dispatch(createQuestion(data, 'Your question has been sent, we will reply to you as soon as we can!'))
      }
    }
  }
)(QuestionForm)
