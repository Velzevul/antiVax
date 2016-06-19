import React from 'react'
import {connect} from 'react-redux'

import {fetchSearchResults} from '../../store/searchActions'
import SearchResultsItem from '../SearchResultsItem'
import {Spinner} from '../../UI'
import styles from './SearchResultsPage.css'
import {Wrap, List, ListItem, Block} from '../../Layouts'
import {Heading1} from '../../Typography'

class SearchResultsPage extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props
    const {query} = this.props.location

    dispatch(fetchSearchResults(query.q))
  }

  componentWillReceiveProps (nextProps) {
    const {dispatch} = nextProps
    const {query} = nextProps.location

    if (query.q !== this.props.location.query.q) {
      dispatch(fetchSearchResults(query.q))
    }
  }

  render () {
    const {pages, location, isFetching} = this.props

    if (isFetching) {
      return (
        <Spinner />
      )
    } else {
      if (pages.length) {
        return (
          <Wrap maxWidth="50rem">
            <div className={styles.SearchResultsPage}>
              <Block n={3}>
                <Heading1>{pages.length} pages mention '{location.query.q}'</Heading1>
              </Block>

              <List n={3}>
                {pages.map(p =>
                  <ListItem n={3} key={p.id}>
                    <SearchResultsItem item={p} />
                  </ListItem>
                )}
              </List>
            </div>
          </Wrap>
        )
      } else {
        return (
          <div className={styles.EmptySearchResultsPage}>
            <div className={styles.EmptySearchResultsPage__text}>
              We could not find <strong>'{location.query.q}'</strong> on our website
            </div>
          </div>
        )
      }
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.search.isFetching,
      pages: state.search.pages
    }
  }
)(SearchResultsPage)
