import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import styles from './SearchBar.css'
import {fetchSearchResults, setSearchQuery} from '../../store/searchActions'

const typeDelay = 500

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.handleType = this.handleType.bind(this)

    this.state = {
      timeoutId: null,
      query: ''
    }
  }

  componentWillMount () {
    const {fetchSearchResults, setSearchQuery, location: {query}} = this.props

    if (query && query.q) {
      this.setState({
        query: query.q
      })
      setSearchQuery(query.q)
      fetchSearchResults(query)
    }
  }

  componentWillReceiveProps (nextProps) {
    const {query} = nextProps

    if (query !== this.props.query) {
      if (query) {
        this.props.fetchSearchResults(query)

        browserHistory.push({
          pathname: `${PUBLIC_PATH}/search`,
          query: {q: query}
        })
      } else {
        this.setState({query})
      }
    }
  }

  handleType () {
    const {setSearchQuery} = this.props

    this.setState({
      query: this._input.value
    }, () => {
      clearTimeout(this.state.timeoutId)
      this.setState({
        timeoutId: setTimeout(() => {
          setSearchQuery(this.state.query)
        }, typeDelay)
      })
    })
  }

  render () {
    return (
      <div className={styles.SearchBar}>
        <input type="text"
          className={styles.SearchBar__input}
          value={this.state.query}
          ref={el => { this._input = el }}
          onChange={this.handleType}
          placeholder="search for keywords, e.g. 'polio vaccine'" />
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      query: state.search.query
    }
  },
  dispatch => {
    return {
      setSearchQuery: (q) => {
        dispatch(setSearchQuery(q))
      },
      fetchSearchResults: () => {
        dispatch(fetchSearchResults())
      }
    }
  }
)(SearchBar)
