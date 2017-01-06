import React from 'react'

import styles from './TextInput.css'

class TextInput extends React.Component {
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
    const {
      error,
      value,
      placeholder,
      hasPrefix = false,
      hasSuffix = false,
      disabled = false,
      inverse = false,
      type = 'text'
    } = this.props

    return (
      <input ref={el => { this._element = el }}
        value={value}
        className={`${styles.TextInput}
          ${error ? styles.TextInput_error : null}
          ${inverse ? styles.TextInput_inverse : null}
          ${hasPrefix ? styles.TextInput_withPrefix : null}
          ${hasSuffix ? styles.TextInput_withSuffix : null}`}
        disabled={disabled}
        type={type}
        onChange={this.onChange}
        placeholder={placeholder} />
    )
  }
}

export default TextInput
