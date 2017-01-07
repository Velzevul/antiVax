import React from 'react'

const Wrapper = ({
  children,
  maxWidth = 90,
  width = 100
}) => {
  const style = {
    width: `${width}%`,
    maxWidth: `${maxWidth}rem`,
    marginRight: 'auto',
    marginLeft: 'auto'
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper
