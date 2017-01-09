import React from 'react'

import styles from './Signature.css'
import {Flex} from '../Layouts'

const Signature = () => {
  return (
    <Flex justifyContent="flex-end">
      <div className={styles.Signature}>
        – Dr. Jennifer Potter, MD
      </div>
    </Flex>
  )
}

export default Signature
