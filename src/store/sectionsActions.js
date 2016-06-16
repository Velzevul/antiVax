import {firebaseDb} from './firebaseRef'

export const REQUEST_SECTION = 'REQUEST_SECTION'
export const RECEIVE_SECTION = 'RECEIVE_SECTION'

const requestSection = (
  sectionId
) => {
  return {
    type: REQUEST_SECTION,
    sectionId
  }
}

const receiveSection = (
  sectionId,
  section
) => {
  return {
    type: RECEIVE_SECTION,
    sectionId,
    section
  }
}

export const fetchSection = (
  sectionId
) => {
  return dispatch => {
    dispatch(requestSection(sectionId))

    return firebaseDb.ref(`/${sectionId}`).once('value')
      .then(snapshot => {
        dispatch(receiveSection(sectionId, snapshot.val()))
      })
  }
}
