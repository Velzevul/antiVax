import {REQUEST_ARTICLES, RECEIVE_ARTICLES} from './articleActions'
import initialState from './initialState'

const articles = (
  state = initialState.articles,
  action
) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    default:
      return state
  }
}

export default articles
