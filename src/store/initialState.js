export default {
  auth: {
    isFetching: false,
    user: null
  },
  flash: {
    message: null,
    type: null,
    timeoutId: null
  },
  newQuestion: {
    isUpdating: false,
    errors: {}
  },
  articles: {
    isFetching: false,
    items: []
  },
  newComment: {
    isUpdating: false,
    errors: {}
  },
  schedule: {
    isFetching: false,
    items: [],
    postScheduleContent: null
  },
  search: {
    isFetching: false,
    items: []
  }
}
