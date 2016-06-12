import React from 'react';
import {connect} from 'react-redux';

import {fetchSearchResults} from '../../store/searchActions';
import SearchResultsItem from '../SearchResultsItem';
import styles from './SearchResultsList.css';


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

    let content;

    if (isFetching) {
      content = (
        <div>loading...</div>
      );
    } else {
      if (pages.length) {
        content = pages.map(p =>
          <div key={p.id} className={styles.SearchResultsList__item}>
            <SearchResultsItem item={p}/>
          </div>
        );
      } else {
        content = (
          <div>no pages match your query :(</div>
        )
      }
    }

    return (
      <div className={styles.SearchResultsList}>
        <div className={styles.SearchResultsList__title}>
          <h2 className={typography.hSecondary}>Pages Relevant to Your Question</h2>
        </div>

        {content}
      </div>
    )
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
