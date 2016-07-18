import 'whatwg-fetch'

export const REQUEST_QUESTION_CREATE = 'REQUEST_QUESTION_CREATE'
export const CONFIRM_QUESTION_CREATE = 'CONFIRM_QUESTION_CREATE'
export const REJECT_QUESTION_CREATE = 'REJECT_QUESTION_CREATE'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestCreate = () => {
  return {
    type: REQUEST_QUESTION_CREATE
  }
}

const confirmCreate = () => {
  return {
    type: CONFIRM_QUESTION_CREATE
  }
}

const rejectCreate = (
  errors
) => {
  return {
    type: REJECT_QUESTION_CREATE,
    errors
  }
}

export const createQuestion = (
  data,
  successMessage
) => {
  return (dispatch, getState) => {
    dispatch(requestCreate())

    fetch(`${SERVER_URL}/questions/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        question: data
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
          dispatch(confirmCreate())
          if (successMessage) {
            dispatch(flashMessage(successMessage, 'log'))
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(rejectCreate(payload))
          dispatch(flashMessage('Could not post questions due to errors', 'error'))
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
