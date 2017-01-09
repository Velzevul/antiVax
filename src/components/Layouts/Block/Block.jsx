import React from 'react'

const baseline = 0.750

const Block = ({
  n = 1,
  children
}) => {
  const style = {
    marginBottom: `${baseline * n}rem`
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Block
