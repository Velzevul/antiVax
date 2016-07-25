import {REQUEST_ARTICLES, RECEIVE_ARTICLES} from './articleActions'
import {REQUEST_COMMENT_CREATE, CONFIRM_COMMENT_CREATE, REJECT_COMMENT_CREATE} from './commentsActions'
import {REQUEST_REPLY_CREATE, CONFIRM_REPLY_CREATE, REJECT_REPLY_CREATE} from './repliesActions'
import initialState from './initialState'

const INIT_ARTICLE = 'INIT_ARTICLE'
const INIT_COMMENT = 'INIT_COMMENT'

const newComment = (
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_COMMENT_CREATE:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REJECT_COMMENT_CREATE:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
    case CONFIRM_COMMENT_CREATE:
      return Object.assign({}, initialState.newComment)
    default:
      return state
  }
}

const newReply = (
  state,
  action
) => {
  switch (action.type) {
    case REQUEST_REPLY_CREATE:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REJECT_REPLY_CREATE:
      return Object.assign({}, state, {
        isUpdating: false,
        errors: action.errors
      })
    case CONFIRM_REPLY_CREATE:
      return Object.assign({}, initialState.newComment)
    default:
      return state
  }
}

const comment = (
  state,
  action
) => {
  switch (action.type) {
    case INIT_COMMENT:
      return Object.assign({}, action.comment, {
        newReply: newReply(Object.assign({}, initialState.newComment), action)
      })
    case CONFIRM_COMMENT_CREATE:
      if (state._id === action.commentId) {
        return Object.assign({}, action.comment, {
          newReply: newReply(Object.assign({}, initialState.newComment), action)
        })
      } else {
        return state
      }
    case CONFIRM_REPLY_CREATE:
      if (state._id === action.commentId) {
        return Object.assign({}, state, {
          newReply: newReply(state.newReply, action),
          replies: [
            ...state.replies,
            action.reply
          ]
        })
      } else {
        return state
      }
    case REQUEST_REPLY_CREATE:
    case REJECT_REPLY_CREATE:
      if (state._id === action.commentId) {
        return Object.assign({}, state, {
          newReply: newReply(state.newReply, action)
        })
      } else {
        return state
      }
    default:
      return state
  }
}

const article = (
  state,
  action
) => {
  switch (action.type) {
    case INIT_ARTICLE:
      return Object.assign({}, action.article, {
        comments: action.article.comments.map(c => comment(undefined, {
          type: INIT_COMMENT,
          comment: c
        })),
        newComment: newComment(Object.assign({}, initialState.newComment), action)
      })
    case CONFIRM_COMMENT_CREATE:
      if (state._id === action.articleId) {
        return Object.assign({}, state, {
          newComment: newComment(state.newComment, action),
          comments: [
            ...state.comments,
            comment(undefined, {
              type: INIT_COMMENT,
              comment: action.comment
            })
          ]
        })
      } else {
        return state
      }
    case REQUEST_COMMENT_CREATE:
    case REJECT_COMMENT_CREATE:
      if (state._id === action.articleId) {
        return Object.assign({}, state, {
          newComment: newComment(state.newComment, action)
        })
      } else {
        return state
      }
    case REQUEST_REPLY_CREATE:
    case CONFIRM_REPLY_CREATE:
    case REJECT_REPLY_CREATE:
      if (state._id === action.articleId) {
        return Object.assign({}, state, {
          comments: state.comments.map(c => comment(c, action))
        })
      } else {
        return state
      }
    default:
      return state
  }
}

const articles = (
  state = initialState.articles,
  action
) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items.map(i => article(undefined, {
          type: INIT_ARTICLE,
          article: i
        }))
      })
    case REQUEST_COMMENT_CREATE:
    case REJECT_COMMENT_CREATE:
    case CONFIRM_COMMENT_CREATE:
    case REQUEST_REPLY_CREATE:
    case CONFIRM_REPLY_CREATE:
    case REJECT_REPLY_CREATE:
      return Object.assign({}, state, {
        items: state.items.map(i => article(i, action))
      })
    default:
      return state
  }
}

export default articles
