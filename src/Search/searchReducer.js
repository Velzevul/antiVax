import {REQUEST_SEARCH, RECEIVE_SEARCH} from './searchActions';


const search = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch(action.type) {
    case REQUEST_SEARCH:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
};

export default search;
