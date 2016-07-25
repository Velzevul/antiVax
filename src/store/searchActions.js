import index from './algoliaSearch'

export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

export const setSearchQuery = (
  q
) => {
  return {
    type: SET_SEARCH_QUERY,
    query: q
  }
}

const requestSearchResults = () => {
  return {
    type: REQUEST_SEARCH_RESULTS
  }
}

const receiveSearchResults = (
  items
) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    items
  }
}

export const fetchSearchResults = () => {
  return (dispatch, getState) => {
    dispatch(requestSearchResults())

    return index.search(getState().search.query, (err, content) => {
      dispatch(receiveSearchResults(content.hits))
    })
  }
}
