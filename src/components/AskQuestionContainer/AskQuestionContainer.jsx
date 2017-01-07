import React from 'react'
import {connect} from 'react-redux'

import AskQuestionDesktop from '../AskQuestionDesktop'
import AskQuestionMobile from '../AskQuestionMobile'

import {createQuestion} from '../../store/questionsActions'

class AskQuestionContainer extends React.Component {
  render () {
    const {user, question, createQuestion, windowWidth, widthThreshold} = this.props

    if (windowWidth >= widthThreshold) {
      return (
        <AskQuestionDesktop
          user={user}
          question={question}
          createQuestion={createQuestion} />
      )
    } else {
      return (
        <AskQuestionMobile
          user={user}
          question={question}
          createQuestion={createQuestion} />
      )
    }
  }
}

export default connect(
  state => {
    return {
      user: state.auth.user,
      question: state.question,
      windowWidth: state.ui.windowWidth,
      widthThreshold: state.ui.widthThreshold
    }
  },
  dispatch => {
    return {
      createQuestion: (data) => {
        dispatch(createQuestion(data, 'Your question has been sent, we will reply to you as soon as we can!'))
      }
    }
  }
)(AskQuestionContainer)
