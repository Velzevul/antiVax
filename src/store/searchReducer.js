import {REQUEST_SEARCH_RESULTS, RECEIVE_SEARCH_RESULTS} from './searchActions';


const search = (
  state={
    isFetching: false,
    pages: []
  },
  action
) => {
  switch(action.type) {
    case REQUEST_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: true
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
