import React from 'react';
import {connect} from 'react-redux';

import {fetchSearchResults} from '../../store/searchActions';
import SearchResultsItem from '../SearchResultsItem';
import Spinner from '../../Spinner';
import styles from './SearchResultsPage.css';
import layouts from '../../styles/layouts.css';
import typography from '../../styles/typography.css';
import states from '../../styles/states.css';


class SearchResultsPage extends React.Component {
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
        <Spinner />
      );
    } else {
      if (pages.length) {
        return (
          <div className={styles.SearchResultsPage}>
            <div className={layouts.block3}>
              <div className={states.aligned_mid}>
                <h1 className={typography.hPrimary}>Pages relevant to your search</h1>
              </div>
            </div>

            <div className={`${layouts.grid} ${layouts.grid_h_mid}`}>
              <div className={`${layouts.grid__item} ${layouts._8_12}`}>
                {pages.map(p =>
                  <SearchResultsItem item={p} key={p.id} />
                )}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className={styles.EmptySearchResultsPage}>
            No pages match your request
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
    };
  }
)(SearchResultsPage);
