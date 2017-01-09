import 'whatwg-fetch'

export const SET_BREAKPOINT = 'SET_BREAKPOINT'
export const TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU'

export const setBreakpoint = (
  width,
  layout
) => {
  return {
    type: SET_BREAKPOINT,
    width,
    layout
  }
}

export const toggleMainMenu = () => {
  return {
    type: TOGGLE_MAIN_MENU
  }
}
