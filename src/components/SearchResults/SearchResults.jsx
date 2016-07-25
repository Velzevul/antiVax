import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {setSearchQuery} from '../../store/searchActions'
import SearchResultsItem from '../SearchResultsItem'
import {Spinner} from '../UI'
import styles from './SearchResults.css'
import {Wrap, List, ListItem, Block} from '../Layouts'
import {Heading1} from '../Typography'

class SearchResults extends React.Component {
  componentDidMount () {
    const {setSearchQuery} = this.props

    this.props.router.setRouteLeaveHook(this.props.route, () => {
      setSearchQuery('')
    })
  }

  render () {
    const {items, location, isFetching} = this.props

    if (isFetching) {
      return (
        <Spinner />
      )
    } else {
      if (items.length) {
        return (
          <Wrap maxWidth="50rem">
            <div className={styles.SearchResults}>
              <Block n={3}>
                <Heading1>{items.length} pages mention '{location.query.q}'</Heading1>
              </Block>

              <List n={3}>
                {items.map(p =>
                  <ListItem n={3} key={p.objectID}>
                    <SearchResultsItem item={p} />
                  </ListItem>
                )}
              </List>
            </div>
          </Wrap>
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
)(SearchResultsWithRouter)
