import React from 'react'

import {baseline} from '../../config.js'

const Body = ({
  pv = 6,
  ph = 6,
  children
}) => {
  const style = {
    height: '100%',
    paddingTop: pv * baseline,
    paddingBottom: pv * baseline,
    paddingLeft: ph * baseline,
    paddingRight: ph * baseline
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Body
