import {RESET_SEARCH, REQUEST_SEARCH_RESULTS, RECEIVE_SEARCH_RESULTS} from './searchActions';


const search = (
  state={
    query: '',
    isFetching: false,
    pages: []
  },
  action
) => {
  switch(action.type) {
    case RESET_SEARCH:
      return {
        query: '',
        isFetching: false,
        pages: []
      };
    case REQUEST_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query
      });
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: false,
        pages: action.pages
      });
    default:
      return state;
  }
};

export default search;
