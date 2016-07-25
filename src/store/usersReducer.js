import {REQUEST_UPDATE_USER, CONFIRM_UPDATE_USER, REJECT_UPDATE_USER} from './usersActions'
import initialState from './initialState'

const user = (
  state = initialState.user,
  action
) => {
  switch (action.type) {
    case REQUEST_UPDATE_USER:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REJECT_UPDATE_USER:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
    case CONFIRM_UPDATE_USER:
      return Object.assign({}, initialState.user)
    default:
      return state
  }
}

export default user
