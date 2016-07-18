import 'whatwg-fetch'

import {flashMessage} from './flashActions'

export const REQUEST_AUTH = 'REQUEST_AUTH'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const requestAuth = () => {
  return {
    type: REQUEST_AUTH
  }
}

export const logOut = () => {
  return dispatch => {
    localStorage.removeItem('antiVax_auth_token')
    dispatch({type: LOGOUT})
  }
}

const logIn = (
  user
) => {
  return {
    type: LOGIN,
    user
  }
}

export const loginWithCredentials = (
  email,
  password
) => {
  return dispatch => {
    dispatch(requestAuth())

    fetch(`${SERVER_URL}/auth/authenticate-credentials`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          localStorage.setItem('antiVax_auth_token', json.data.token)
          dispatch(logIn(json.data.user))
        } else {
          dispatch(logOut())
          dispatch(flashMessage(json.data.error, 'error'))
        }
      })
  }
}

export const loginWithToken = (
  token
) => {
  return dispatch => {
    dispatch(requestAuth())

    fetch(`${SERVER_URL}/auth/authenticate-token`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          localStorage.setItem('antiVax_auth_token', json.data.token)
          dispatch(logIn(json.data.user))
        } else {
          dispatch(logOut())
          dispatch(flashMessage(json.data.error, 'error'))
        }
      })
  }
}
