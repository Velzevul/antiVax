import React from 'react'
import {connect} from 'react-redux'

import {setSearchQuery} from '../../store/searchActions'
import {TextInput, Button} from '../UI'
import InputDecorator from '../Layouts/InputDecorator'

import styles from './SearchBar.css'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: this.props.query
    }

    this.setQuery = this.setQuery.bind(this)
  }

  componentWillReceiveProps (newProps) {
    const {query} = newProps

    this.setState({
      query
    })
  }

  setQuery (v) {
    const {setSearchQuery} = this.props

    setSearchQuery(v)
  }

  render () {
    return (
      <form onSubmit={this.search}
        className={styles.SearchBar}>

        <InputDecorator
          input={
            <TextInput
              value={this.state.query}
              hasSuffix
              inverse
              changeCallback={this.setQuery}
              placeholder="Search the website" />
          }
          suffix={
            <Button hasPrefix to={`/search?q=${this.state.query}`}>Search</Button>
          } />
      </form>
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
      }
    }
  }
)(SearchBar)
