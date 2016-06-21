import {REQUEST_SCHEDULE, RECEIVE_SCHEDULE} from './scheduleActions'

const schedule = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SCHEDULE:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SCHEDULE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    default:
      return state
  }
}

export default schedule
