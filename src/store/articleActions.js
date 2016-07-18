import 'whatwg-fetch'
import {hashHistory} from 'react-router'

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestArticles = () => {
  return {
    type: REQUEST_ARTICLES
  }
}

const receiveArticles = (
  items
) => {
  return {
    type: RECEIVE_ARTICLES,
    items
  }
}

export const fetchArticles = () => {
  return (dispatch, getState) => {
    dispatch(requestArticles())

    fetch(`${SERVER_URL}/articles/`, {
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
        dispatch(receiveArticles(json.data.articles))
      } else {
        console.error(json.data)
        dispatch(flashMessage('Oops, something went wrong :()', 'error'))
      }
    })
  }
}
