import 'whatwg-fetch'
import {hashHistory} from 'react-router'

export const REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER'
export const CONFIRM_UPDATE_USER = 'CONFIRM_UPDATE_USER'
export const REJECT_UPDATE_USER = 'REJECT_UPDATE_USER'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestUpdate = (
  id
) => {
  return {
    type: REQUEST_UPDATE_USER,
    id
  }
}

const confirmUpdate = (
  id,
  updatedItem
) => {
  return {
    type: CONFIRM_UPDATE_USER,
    id,
    updatedItem
  }
}

const rejectUpdate = (
  id,
  errors
) => {
  return {
    type: REJECT_UPDATE_USER,
    id,
    errors
  }
}

export const updateUser = (
  id,
  data,
  backlink
) => {
  return (dispatch, getState) => {
    dispatch(requestUpdate(id))

    fetch(`${SERVER_URL}/users/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      },
      body: JSON.stringify({
        user: data
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
          dispatch(confirmUpdate(id, json.data.user))
          dispatch(flashMessage('Your account information has been updated', 'log'))
          if (backlink) {
            hashHistory.push(backlink)
          }
        } else if (json.data.name === 'ValidationError') {
          let payload = {}

          for (let prop in json.data.errors) {
            payload[prop] = json.data.errors[prop].message
          }

          dispatch(rejectUpdate(id, payload))
          dispatch(flashMessage('Could not update user due to errors', 'error'))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}
