import {firebaseDb} from './firebaseRef'

export const REQUEST_SCHEDULE = 'REQUEST_SCHEDULE'
export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE'

const requestSchedule = () => {
  return {
    type: REQUEST_SCHEDULE
  }
}

const receiveSchedule = (
  items
) => {
  return {
    type: RECEIVE_SCHEDULE,
    items
  }
}

export const fetchSchedule = () => {
  return dispatch => {
    dispatch(requestSchedule())

    return firebaseDb.ref('/schedule').once('value')
      .then(snapshot => {
        dispatch(receiveSchedule(snapshot.val()))
      })
  }
}
