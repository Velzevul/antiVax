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
    data: {},
    errors: {}
  },
  articles: {
    isFetching: true,
    items: []
  },
  schedule: {
    isFetching: true,
    items: [],
    postScheduleContent: null
  },
  search: {
    isFetching: false,
    items: []
  }
}
