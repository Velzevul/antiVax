import React from 'react'

import styles from './LabeledInput.css'

import Flex from '../Flex'

const LabeledInput = ({
  input,
  label,
  error = false,
  inverse = false
}) => {
  let classes = [styles.LabeledInput]
  if (inverse) {
    classes.push(styles.LabeledInput_inverse)
  }

  return (
    <label className={`${classes.join(' ')}`}>
      <Flex
        justifyContent="space-between"
        alignItems="center">
        <div className={styles.LabeledInput__label}>{label}</div>

        {error
          ? <div className={styles.LabeledInput__error}>{error}</div>
          : ''
        }
      </Flex>

      {input}
    </label>
  )
}

export default LabeledInput
