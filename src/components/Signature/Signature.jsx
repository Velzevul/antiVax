import React from 'react'
import {Link} from 'react-router'

import styles from './Signature.css'
import {Flex} from '../Layouts'

const Signature = () => {
  return (
    <Flex justifyContent="flex-end">
      <Link
        to="/who-we-are"
        className={styles.Signature}>
        – Jen Potter MD B.Sc. CCFP<br />Family physician
      </Link>
    </Flex>
  )
}

export default Signature
