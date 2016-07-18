import React from 'react'
import {connect} from 'react-redux'

import {Alert} from '../UI'

const FlashMessage = ({
  message,
  type
}) => {
  return (
    <Alert message={message} theme={type} />
  )
}

export default connect(
  state => {
    return {
      message: state.flash.message,
      type: state.flash.type
    }
  }
)(FlashMessage)
