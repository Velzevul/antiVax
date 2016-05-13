import {REQUEST_FAQS, RECEIVE_FAQS} from './FaqActions';


export const faqs = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch(action.type) {
    case REQUEST_FAQS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_FAQS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.ids
      });
    default:
      return state;
  }
};

export const faqsByCategory = (
  state = {},
  action
) => {
  switch(action.type) {
    case REQUEST_FAQS:
    case RECEIVE_FAQS:
      return Object.assign({}, state, {
        [action.category]: faqs(state[action.category], action)
      });
    default:
      return state;
  }
};
