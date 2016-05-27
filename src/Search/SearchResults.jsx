import React from 'react';
import {Link} from 'react-router';

import {fetchSearch} from './searchActions';

class SearchResults extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props,
          {q} = this.props.location.query;

    dispatch(fetchSearch(q));
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch} = nextProps,
          {q} = nextProps.location.query;

    if (q !== this.props.location.query.q) {
      dispatch(fetchSearch(nextQ));
    }
  }

  render() {
    const {items} = this.props,
          {q} = this.props.location.query;

    if (q) {
      return (
        <div>
          <h1>Search Results</h1>

          <ul>
            { items.map( i =>
              <li key={i.id} >
                <Link to={i.url}>{i.title}</Link>
              </li>
            ) }
          </ul>
        </div>
      )
    } else {
      return (
        <div>Please, use the box above to specify search criteria</div>
      );
    }
  }
}

export default connect(
  state => {
    return {
      isFetching: state.search.isFetching,
      items: state.search.items.map(i => state.entities[i])
    }
  }
)(SearchResults);
