import React from 'react'

import styles from './LabeledInput.css'

const LabeledInput = ({
  label,
  input,
  inverse = false
}) => {
  let classes = [styles.LabeledInput]
  if (inverse) {
    classes.push(styles.LabeledInput_inverse)
  }

  return (
    <label className={`${classes.join(' ')}`}>
      <div className={styles.LabeledInput__label}>{label}</div>

      {input}
    </label>
  )
}

export default LabeledInput
