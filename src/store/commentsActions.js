import 'whatwg-fetch'

export const REQUEST_COMMENT_CREATE = 'REQUEST_COMMENT_CREATE'
export const CONFIRM_COMMENT_CREATE = 'CONFIRM_COMMENT_CREATE'
export const REJECT_COMMENT_CREATE = 'REJECT_COMMENT_CREATE'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestCreate = (
  articleId
) => {
  return {
    type: REQUEST_COMMENT_CREATE,
    articleId
  }
}

const confirmCreate = (
  comment,
  articleId
) => {
  return {
    type: CONFIRM_COMMENT_CREATE,
    comment,
    articleId
  }
}

const rejectCreate = (
  errors,
  articleId
) => {
  return {
    type: REJECT_COMMENT_CREATE,
    errors,
    articleId
  }
}

export const createComment = (
  data,
  articleId,
  successMessage
) => {
  return (dispatch, getState) => {
    dispatch(requestCreate(articleId))

    fetch(`${SERVER_URL}/articles/${articleId}/comments/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        comment: data
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
          dispatch(confirmCreate(json.data.comment, articleId))
          if (successMessage) {
            dispatch(flashMessage(successMessage, 'log'))
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            const propComponents = prop.split('.')
            const commentProp = propComponents[propComponents.length - 1]
            payload[commentProp] = json.data.errors[prop].message
          }

          dispatch(rejectCreate(payload, articleId))
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
