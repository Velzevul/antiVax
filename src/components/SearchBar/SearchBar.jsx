import React from 'react'
import {hashHistory} from 'react-router'

import styles from './SearchBar.css'

const typeDelay = 500

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.handleType = this.handleType.bind(this)
    this.state = {
      timeoutId: 0
    }
  }

  handleType () {
    clearTimeout(this.state.timeoutId)
    const timeoutId = setTimeout(() => {
      const query = this._input.value

      if (query) {
        hashHistory.push({
          pathname: `${PUBLIC_PATH}/search`,
          query: {q: query}
        })
      } else {
        hashHistory.push(`${PUBLIC_PATH}/questions`)
      }
    }, typeDelay)

    this.setState({timeoutId})
  }

  render () {
    const {query} = this.props.location

    return (
      <div className={styles.SearchBar}>
        <input type="text"
          className={styles.SearchBar__input}
          defaultValue={query.q ? query.q : ''}
          ref={el => { this._input = el }}
          onChange={this.handleType}
          placeholder="search for keywords, e.g. 'polio vaccine'" />
      </div>
    )
  }
}

export default SearchBar
