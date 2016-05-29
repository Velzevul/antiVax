import index from '../store/algoliaSearch';


export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RESET_SEARCH = 'RESET_SEARCH';

const requestSearchResults = (
  query
) => {
  return {
    type: REQUEST_SEARCH_RESULTS,
    query
  }
};

const receiveSearchResults = (
  pages
) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    pages
  }
};

export const resetSearch = () => {
  return {
    type: RESET_SEARCH
  }
};

export const fetchSearchResults = (
  query
) => {
  return dispatch => {
    dispatch(requestSearchResults(query));

    return index.search(query, (err, content) => {
      dispatch(receiveSearchResults(content.hits));
    });
  }
};
