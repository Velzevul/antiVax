import React from 'react';
import {browserHistory} from 'react-router';

import styles from './QuestionsSearch.css';

const typeDelay = 500;

class QuestionsSearch extends React.Component {
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
          pathname: '/questions',
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
      <input type="text"
             className={styles.QuestionsSearch}
             defaultValue={query.q ? query.q : ''}
             ref={ el => this._input = el }
             onChange={this.handleType}
             placeholder="Type keywords to search..."/>
    );
  }
}

export default QuestionsSearch;
