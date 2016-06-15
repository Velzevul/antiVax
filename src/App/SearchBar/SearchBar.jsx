import React from 'react';
import {browserHistory} from 'react-router';

import styles from './SearchBar.css';

const typeDelay = 500;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {timeoutId: 0};
    this.handleType = this.handleType.bind(this);
  }

  handleType() {
    clearTimeout(this.state.timeoutId);
    const timeoutId = setTimeout(() => {
      const query = this._input.value;

      if (query) {
        browserHistory.push({
          pathname: '/search',
          query: {q: query}
        });
      } else {
        browserHistory.push('/questions');
      }
    }, typeDelay);

    this.setState({timeoutId});
  }

  render() {
    const {query} = this.props.location;

    return (
      <div className={styles.SearchBar}>
        <input type="text"
               className={styles.SearchBar__input}
               defaultValue={query.q ? query.q : ''}
               ref={ el => this._input = el }
               onChange={this.handleType}
               placeholder="search for keywords, e.g. 'polio vaccine'"/>
      </div>
    );
  }
}

export default SearchBar;
