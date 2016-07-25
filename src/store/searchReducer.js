import {REQUEST_SEARCH_RESULTS, RECEIVE_SEARCH_RESULTS,
  SET_SEARCH_QUERY} from './searchActions'
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
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, {
        query: action.query
      })
    default:
      return state
  }
}

export default search
