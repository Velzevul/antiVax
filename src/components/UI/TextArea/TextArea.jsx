import React from 'react'
import {anchorme} from 'anchorme.js'
import striptags from 'striptags'
import Textarea from 'react-textarea-autosize'

import InputLabel from '../InputLabel'
import styles from './TextArea.css'

const plainToHtml = (text) => `<p>${anchorme.js(text.replace(/\n/g, '<br />'))}</p>`
const htmlToPlain = (html) => striptags(html.replace(/<br \/>/g, '\n'))

class TextArea extends React.Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    const value = plainToHtml(this._element.value)
    const {changeCallback} = this.props

    changeCallback(value)
  }

  render () {
    const {error, value, placeholder, disabled = false} = this.props

    return (
      <Textarea ref={el => { this._element = el }}
        value={htmlToPlain(value)}
        className={`${styles.TextArea} ${error ? styles.TextArea_error : null}`}
        disabled={disabled}
        minRows={5}
        onChange={this.onChange}
        placeholder={placeholder} />
    )
  }
}

export default TextArea
