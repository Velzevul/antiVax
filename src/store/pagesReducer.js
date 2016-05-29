import {REQUEST_PAGE, RECEIVE_PAGE} from './pagesActions';


const page = (
  state = {
    id: '',
    isFetching: true,
    title: '',
    content: '',
    createdAt: '',
    createdBy: '',
    items: null
  },
  action
) => {
  switch(action.type) {
    case REQUEST_PAGE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PAGE:
      return Object.assign({}, state, {
        id: action.pageId,
        isFetching: false,
        title: action.page.title,
        content: action.page.content,
        createdAt: action.page.createdAt,
        createdBy: action.page.createdBy,
        items: action.page.items
      });
    default:
      return state;
  }
};

const pages = (
  state = {},
  action
) => {
  switch(action.type) {
    case REQUEST_PAGE:
    case RECEIVE_PAGE:
      return Object.assign({}, state, {
        [action.pageId]: page(state[action.pageId], action)
      });
    default:
      return state;
  }
};

export default pages;
