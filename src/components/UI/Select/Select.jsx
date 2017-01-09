import React from 'react'

import styles from './Select.css'

class Select extends React.Component {
  render () {
    const {
      options,
      onChange,
      value,
      inverse = false,
      disabled = false
    } = this.props

    const selectedOption = options.find(o => o.id === value)
    const inputLabel = selectedOption ? selectedOption.label : 'None'

    return (
      <div className={`${styles.Select}
        ${inverse ? styles.Select_inverse : ''}`}>
        <div className={styles.Select__fake}>{inputLabel}</div>

        <select className={styles.Select__input}
          ref={el => { this._element = el }}
          value={value}
          disabled={disabled}
          onChange={(v) => onChange(v.target.value)}>
          {options.map((o, index) =>
            <option key={index} value={o.id}>{o.label}</option>
          )}
        </select>
      </div>
    )
  }
}

export default Select
