import React from 'react';
import {connect} from 'react-redux';

import SearchResultsItem from './SearchResultsItem';


const SearchResultsList = ({
  pages,
  query
}) => {
  if (query && !pages.length) {
    return (
      <div>no pages match your query :(</div>
    )
  } else {
    return (
      <ul>
        { pages.map(p =>
          <li key={p.id}>
            <SearchResultsItem item={p}/>
          </li>
        )}
      </ul>
    );
  }
};

export default connect(
  state => {
    return {
      pages: state.search.pages,
      query: state.search.query
    };
  }
)(SearchResultsList);
