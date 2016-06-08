import React from 'react';
import {connect} from 'react-redux';

import {fetchSearchResults} from '../store/searchActions';
import SearchResultsItem from './SearchResultsItem';


class SearchResultsList extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props,
          {query} = this.props.location;

    dispatch(fetchSearchResults(query.q));
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch} = nextProps,
          {query} = nextProps.location;

    if (query.q !== this.props.location.query.q) {
      dispatch(fetchSearchResults(query.q));
    }
  }

  render() {
    const {pages, isFetching} = this.props;

    if (isFetching) {
      return (
        <div>loading...</div>
      )
    } else {
      if (pages.length) {
        return (
          <ul>
            { pages.map(p =>
              <li key={p.id}>
                <SearchResultsItem item={p}/>
              </li>
            )}
          </ul>
        );
      } else {
        return (
          <div>no pages match your query :(</div>
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
    };
  }
)(SearchResultsList);
