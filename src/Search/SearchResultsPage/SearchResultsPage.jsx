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
    const {pages, location, isFetching} = this.props;

    if (isFetching) {
      return (
        <Spinner />
      );
    } else {
      if (pages.length) {
        return (
          <div className={`${layouts.wrap} ${styles.SearchResultsPage}`}>
            <div className={layouts.block3}>
              <div className={states.aligned_mid}>
                <h1 className={typography.hPrimary}>{pages.length} pages mention '{location.query.q}'</h1>
              </div>
            </div>

            <div className={`${layouts.wrap} ${styles.SearchResultsPage__body}`}>
              <div className={`${layouts.list} ${layouts.list_2}`}>
                {pages.map(p =>
                  <div className={layouts.list__item}>
                    <SearchResultsItem item={p} key={p.id} />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
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
    };
  }
)(SearchResultsPage);
