import index from '../store/algoliaSearch'

export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

const requestSearchResults = () => {
  return {
    type: REQUEST_SEARCH_RESULTS
  }
}

const receiveSearchResults = (
  pages
) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    pages
  }
}

export const fetchSearchResults = (
  query
) => {
  return dispatch => {
    dispatch(requestSearchResults())

    return index.search(query, (err, content) => {
      dispatch(receiveSearchResults(content.hits))
    })
  }
}
