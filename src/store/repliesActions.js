import 'whatwg-fetch'

export const REQUEST_REPLY_CREATE = 'REQUEST_REPLY_CREATE'
export const CONFIRM_REPLY_CREATE = 'CONFIRM_REPLY_CREATE'
export const REJECT_REPLY_CREATE = 'REJECT_REPLY_CREATE'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestCreate = (
  articleId,
  commentId
) => {
  return {
    type: REQUEST_REPLY_CREATE,
    articleId,
    commentId
  }
}

const confirmCreate = (
  reply,
  articleId,
  commentId
) => {
  return {
    type: CONFIRM_REPLY_CREATE,
    reply,
    articleId,
    commentId
  }
}

const rejectCreate = (
  errors,
  articleId,
  commentId
) => {
  return {
    type: REJECT_REPLY_CREATE,
    errors,
    articleId,
    commentId
  }
}

export const createReply = (
  data,
  articleId,
  commentId,
  successMessage
) => {
  return (dispatch, getState) => {
    dispatch(requestCreate(articleId, commentId))

    fetch(`${SERVER_URL}/articles/${articleId}/comments/${commentId}/replies`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        reply: data
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut())
          dispatch(flashMessage('Authorization failed. Please, log in again', 'error'))
          throw new Error('Unauthorized action')
        } else {
          return response
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          dispatch(confirmCreate(json.data.reply, articleId, commentId))
          if (successMessage) {
            dispatch(flashMessage(successMessage, 'log'))
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            const propComponents = prop.split('.')
            const replyProp = propComponents[propComponents.length - 1]
            payload[replyProp] = json.data.errors[prop].message
          }

          dispatch(rejectCreate(payload, articleId, commentId))
          dispatch(flashMessage('Could not post comment due to errors', 'error'))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
      .catch(err => {
        throw err
      })
  }
}
