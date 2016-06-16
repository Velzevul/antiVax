import React from 'react'

const Flex = ({
  justifyContent = 'flex-start',
  alignItems = 'center',
  extraClassNames = '',
  children
}) => {
  const style = {
    alignItems,
    justifyContent,
    display: 'flex'
  }

  return (
    <div style={style} className={extraClassNames}>
      {children}
    </div>
  )
}

export default Flex
