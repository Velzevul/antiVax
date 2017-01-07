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
  question: {
    isUpdating: false,
    errors: {}
  },
  articles: {
    isFetching: true,
    items: []
  },
  newComment: {
    isUpdating: false,
    errors: {}
  },
  search: {
    isFetching: false,
    items: [],
    query: ''
  },
  user: {
    isUpdating: false,
    errors: {}
  },
  sections: {
    isFetching: true,
    items: []
  },
  ui: {
    windowWidth: 0,
    widthThreshold: 1024,
    mainMenuIsOpen: true
  }
}
