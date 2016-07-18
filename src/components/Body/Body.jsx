import React from 'react'

const baseline = 0.750;

const Body = ({
  pv = 6,
  ph = 6,
  children
}) => {
  const style = {
    height: '100%',
    paddingTop: `${pv * baseline}rem`,
    paddingBottom: `${pv * baseline}rem`,
    paddingLeft: `${ph * baseline}rem`,
    paddingRight: `${ph * baseline}rem`
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Body
