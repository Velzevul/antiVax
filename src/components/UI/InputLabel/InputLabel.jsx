import React from 'react'

import styles from './InputLabel.css'
import {ListInline, ListInlineItem} from '../../Layouts'

const InputLabel = ({
  label,
  error
}) => {
  return (
    <div className={`${styles.InputLabel} ${error ? styles.InputLabel_error : ''}`}>
      <ListInline>
        {label
        ? <ListInlineItem>
          <div className={styles.InputLabel__label}>{label}</div>
        </ListInlineItem>
        : null
        }

        {error
        ? <ListInlineItem>
          <div className={styles.InputLabel__error}>{error}</div>
        </ListInlineItem>
        : null
        }
      </ListInline>
    </div>
  )
}

export default InputLabel
