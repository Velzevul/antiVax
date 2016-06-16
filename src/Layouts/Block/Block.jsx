import React from 'react'

import {baseline} from '../../config.js'

const Block = ({
  n = 1,
  extraClassNames = '',
  children
}) => {
  const style = {
    marginBottom: baseline * n
  }

  return (
    <div style={style} className={extraClassNames}>
      {children}
    </div>
  )
}

export default Block
