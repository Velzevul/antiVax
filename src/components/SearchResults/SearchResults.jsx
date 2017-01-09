import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {setSearchQuery, fetchSearchResults} from '../../store/searchActions'
import SearchResultsItem from '../SearchResultsItem'
import {Spinner} from '../UI'
import styles from './SearchResults.css'
import {List, ListItem} from '../Layouts/List'
import Block from '../Layouts/Block'
import Wrapper from '../Layouts/Wrapper'
import Box from '../Layouts/Box'
import Heading1 from '../Typography/Heading1'

class SearchResults extends React.Component {
  componentDidMount () {
    const {setSearchQuery} = this.props

    this.props.router.setRouteLeaveHook(this.props.route, () => {
      setSearchQuery('')
    })
  }

  componentWillMount () {
    const {fetchSearchResults, setSearchQuery, query, location} = this.props

    if (!query && location.query.q) {
      setSearchQuery(location.query.q)
    }

    fetchSearchResults()
  }

  componentWillReceiveProps (newProps) {
    const {fetchSearchResults, query} = newProps

    if (query !== this.props.query) {
      fetchSearchResults()
    }
  }

  render () {
    const {items, query, location, isFetching, layout} = this.props

    let boxSize = 0
    switch (layout) {
      case 's':
      case 'm':
        boxSize = 4
        break
      case 'l':
      case 'xl':
        boxSize = 8
        break
      default:
        console.error(`unexpected layout type ${layout}`)
    }

    if (isFetching) {
      return (
        <Spinner />
      )
    } else {
      if (items.length) {
        return (
          <Wrapper maxWidth="50">
            <Box n={boxSize}>
              <Block n={3}>
                <Heading1 underline>{items.length} pages mention '{query}'</Heading1>
              </Block>

              <List n={3}>
                {items.map(p =>
                  <ListItem n={3} key={p.objectID}>
                    <SearchResultsItem item={p} />
                  </ListItem>
                )}
              </List>
            </Box>
          </Wrapper>
        )
      } else {
        return (
          <div className={styles.EmptySearchResults}>
            <div className={styles.EmptySearchResults__text}>
              We could not find <strong>'{location.query.q}'</strong> on our website
            </div>
          </div>
        )
      }
    }
  }
}

const SearchResultsWithRouter = withRouter(SearchResults)

export default connect(
  state => {
    return {
      isFetching: state.search.isFetching,
      items: state.search.items,
      query: state.search.query,
      layout: state.ui.layout
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
)(SearchResultsWithRouter)
