import React from 'react'

const Wrapper = ({
  children
}) => {
  const style = {
    width: '95%',
    maxWidth: '90rem',
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
