import React from 'react'

import styles from './InputDecorator.css'

const InputDecorator = ({
  input,
  suffix,
  prefix = null
}) => {
  let prefixEl = null
  if (prefix) {
    prefixEl = (
      <div className={styles.InputDecorator__prefix}>{prefix}</div>
    )
  }

  return (
    <div className={styles.InputDecorator}>
      {prefixEl}

      <div className={styles.InputDecorator__input}>
        {input}
      </div>

      <div className={styles.InputDecorator__suffix}>
        {suffix}
      </div>
    </div>
  )
}

export default InputDecorator
