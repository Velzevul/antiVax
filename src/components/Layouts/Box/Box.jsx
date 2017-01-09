import React from 'react'

const baseline = 0.750

const Box = ({
  n = 1,
  nh = 0,
  children
}) => {
  const style = {
    paddingTop: `${baseline * n}rem`,
    paddingBottom: `${baseline * n}rem`,
    paddingLeft: `${baseline * nh}rem`,
    paddingRight: `${baseline * nh}rem`
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Box
