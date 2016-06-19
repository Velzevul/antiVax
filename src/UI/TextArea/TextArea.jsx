import React from 'react'

import InputLabel from '../InputLabel'
import styles from './TextArea.css'

class TextArea extends React.Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    const value = this._element.value
    const {changeCallback} = this.props

    changeCallback(value)
  }

  render () {
    const {label, error, value, placeholder, disabled = false} = this.props

    return (
      <label className={styles.TextArea}>
        {label
          ? <InputLabel label={label} error={error} />
          : null
        }

        <textarea ref={el => { this._element = el }}
          value={value}
          className={`${styles.TextArea__input} ${error ? styles.TextArea__input_error : null}`}
          disabled={disabled}
          rows={5}
          type="text"
          onChange={this.onChange}
          placeholder={placeholder}></textarea>
      </label>
    )
  }
}

export default TextArea
