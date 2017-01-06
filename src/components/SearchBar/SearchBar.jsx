import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {setSearchQuery} from '../../store/searchActions'
import {TextInput, Button} from '../UI'
import {LabeledInput, InputDecorator} from '../Layouts'

import styles from './SearchBar.css'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: this.props.query
    }

    this.search = this.search.bind(this)
  }

  componentWillMount () {
    const {setSearchQuery, location: {query}} = this.props

    if (query && query.q) {
      this.setState({
        query: query.q
      })
      setSearchQuery(query.q)
    }
  }

  search () {
    const {setSearchQuery} = this.props

    setSearchQuery(this.state.query)
    browserHistory.push({
      pathname: '/search',
      query: {q: this.state.query}
    })
  }

  render () {
    const {label = true} = this.props

    return (
      <form onSubmit={this.search}
        className={styles.SearchBar}>
        <LabeledInput
          inverse
          input={
            <InputDecorator
              input={
                <TextInput value={this.state.query}
                  disabled={this.props.isFetching}
                  hasSuffix
                  inverse
                  changeCallback={(v) => this.setState({query: v})}
                  placeholder="Search the website" />
              }
              suffix={
                <Button disabled={this.props.isFetching}
                  hasPrefix>Search</Button>
              } />
            } />
      </form>
    )
  }
}

export default connect(
  state => {
    return {
      query: state.search.query,
      isFetching: state.search.isFetching
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
