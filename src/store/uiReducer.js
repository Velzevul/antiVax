import {SET_BREAKPOINT, TOGGLE_MAIN_MENU} from './uiActions'
import initialState from './initialState'

const ui = (
  state = initialState.ui,
  action
) => {
  switch (action.type) {
    case SET_BREAKPOINT:
      return Object.assign({}, state, {
        windowWidth: action.width,
        layout: action.layout
      })
    case TOGGLE_MAIN_MENU:
      return Object.assign({}, state, {
        mainMenuIsOpen: !state.mainMenuIsOpen
      })
    default:
      return state
  }
}

export default ui
