import React from 'react'

const Subsection = ({
  params,
  children
}) => {
  return (
    <div>
      <div>
        Subsection
      </div>

      <div>
        {params.subsectionUrl}
      </div>

      {children}
    </div>
  )
}

export default Subsection
