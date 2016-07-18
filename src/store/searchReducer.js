import {REQUEST_SEARCH_RESULTS, RECEIVE_SEARCH_RESULTS} from './searchActions'
import initialState from './initialState'

const search = (
  state = initialState.search,
  action
) => {
  switch (action.type) {
    case REQUEST_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    default:
      return state
  }
}

export default search
