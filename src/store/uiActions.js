import 'whatwg-fetch'

export const SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH'
export const TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU'

export const setWindowWidth = (
  width
) => {
  return {
    type: SET_WINDOW_WIDTH,
    width
  }
}

export const toggleMainMenu = () => {
  return {
    type: TOGGLE_MAIN_MENU
  }
}
