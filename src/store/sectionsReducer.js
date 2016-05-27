import {REQUEST_SECTION, RECEIVE_SECTION} from './sectionsActions';


const section = (
  state = {
    id: '',
    isFetching: true,
    pages: []
  },
  action
) => {
  switch(action.type) {
    case REQUEST_SECTION:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_SECTION:
      return Object.assign({}, state, {
        isFetching: false,
        id: action.sectionId,
        pages: action.section.pages
      });
    default:
      return state;
  }
};

const sections = (
  state = {},
  action
) => {
  switch(action.type) {
    case REQUEST_SECTION:
    case RECEIVE_SECTION:
      return Object.assign({}, state, {
        [action.sectionId]: section(state[action.sectionId], action)
      });
    default:
      return state;
  }
};

export default sections;
