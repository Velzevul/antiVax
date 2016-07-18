import {SET_MESSAGE, UNSET_MESSAGE} from './flashActions'
import initialState from './initialState'

const flash = (
  state = Object.assign({}, initialState.flash),
  action
) => {
  switch (action.type) {
    case SET_MESSAGE:
      clearTimeout(state.timeoutId)

      return Object.assign({}, {
        message: action.message,
        type: action.messageType,
        timeoutId: action.timeoutId
      })
    case UNSET_MESSAGE:
      clearTimeout(state.timeoutId)

      return Object.assign({}, initialState.flash)
    default:
      return state
  }
}

export default flash
