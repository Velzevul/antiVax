import {REQUEST_QUESTION_CREATE, CONFIRM_QUESTION_CREATE, REJECT_QUESTION_CREATE} from './questionsActions'
import initialState from './initialState'

const question = (
  state = initialState.question,
  action
) => {
  switch (action.type) {
    case REQUEST_QUESTION_CREATE:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case CONFIRM_QUESTION_CREATE:
      return Object.assign({}, initialState.question)
    case REJECT_QUESTION_CREATE:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
    default:
      return state
  }
}

export default question
