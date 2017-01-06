import React from 'react'
import {connect} from 'react-redux'

import {toggleMainMenu} from '../../store/uiActions'

import HeaderDesktop from '../HeaderDesktop'
import HeaderMobile from '../HeaderMobile'

class HeaderContainer extends React.Component {
  render () {
    const {widthThreshold, windowWidth, toggleMainMenu, location} = this.props

    if (windowWidth > widthThreshold) {
      return (
        <HeaderDesktop
          location={location} />
      )
    } else {
      return (
        <HeaderMobile
          location={location}
          toggleMainMenu={toggleMainMenu} />
      )
    }
  }
}

export default connect(
  state => {
    return {
      widthThreshold: state.ui.widthThreshold,
      windowWidth: state.ui.windowWidth
    }
  },
  dispatch => {
    return {
      toggleMainMenu: () => {
        dispatch(toggleMainMenu())
      }
    }
  }
)(HeaderContainer)
