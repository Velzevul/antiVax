export const SET_MESSAGE = 'SET_MESSAGE'
export const UNSET_MESSAGE = 'UNSET_MESSAGE'

const setMessage = (
  message,
  messageType,
  timeoutId
) => {
  return {
    type: SET_MESSAGE,
    message,
    messageType,
    timeoutId
  }
}

const unsetMessage = (
  message,
  messageType
) => {
  return {
    type: UNSET_MESSAGE
  }
}

export const flashMessage = (
  message,
  messageType
) => {
  return dispatch => {
    const t = setTimeout(() => {
      dispatch(unsetMessage())
    }, 2000)

    dispatch(setMessage(message, messageType, t))
  }
}
