import 'whatwg-fetch'

export const REQUEST_SCHEDULE = 'REQUEST_SCHEDULE'
export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE'

import {flashMessage} from './flashActions'
import {logOut} from './authActions'

const requestSchedule = () => {
  return {
    type: REQUEST_SCHEDULE
  }
}

const receiveSchedule = (
  items,
  postScheduleContent
) => {
  return {
    type: RECEIVE_SCHEDULE,
    items,
    postScheduleContent
  }
}

export const fetchSchedule = () => {
  return (dispatch, getState) => {
    dispatch(requestSchedule())

    fetch(`${SERVER_URL}/schedule`, {
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
          dispatch(receiveSchedule(json.data.schedule.items, json.data.schedule.postScheduleContent))
        } else {
          console.error(json.data)
          dispatch(flashMessage('Oops, something went wrong :()', 'error'))
        }
      })
  }
}
