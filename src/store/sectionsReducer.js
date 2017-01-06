import {REQUEST_SECTIONS, RECEIVE_SECTIONS} from './sectionsActions'
import initialState from './initialState'

const sections = (
  state = initialState.sections,
  action
) => {
  switch (action.type) {
    case REQUEST_SECTIONS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SECTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    default:
      return state
  }
}

export default sections
