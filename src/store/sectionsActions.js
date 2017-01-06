import 'whatwg-fetch'

export const REQUEST_SECTIONS = 'REQUEST_SECTIONS'
export const RECEIVE_SECTIONS = 'RECEIVE_SECTIONS'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestSections = () => {
  return {
    type: REQUEST_SECTIONS
  }
}

const receiveSections = (
  items
) => {
  return {
    type: RECEIVE_SECTIONS,
    items
  }
}

export const fetchSections = () => {
  return (dispatch, getState) => {
    dispatch(requestSections())

    fetch(`${SERVER_URL}/sections/`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('antiVax_auth_token')
      }
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
        dispatch(receiveSections(json.data.items))
      } else {
        console.error(json.data)
        dispatch(flashMessage('Oops, something went wrong :()', 'error'))
      }
    })
  }
}
