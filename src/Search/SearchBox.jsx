import React from 'react';
import {connect} from 'react-redux';

import {fetchSearchResults, resetSearch} from '../store/searchActions'; 


const typeDelay = 300;

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {timeoutId: 0};
    this.handleType = this.handleType.bind(this);
  }

  handleType() {
    const {dispatch} = this.props;

    clearTimeout(this.state.timeoutId);
    const timeoutId = setTimeout(() => {
      const query = this._input.value;

      if (query) {
        dispatch(fetchSearchResults(this._input.value));
      } else {
        dispatch(resetSearch());
      }
    }, typeDelay);

    this.setState({timeoutId});
  }

  render() {
    return (
      <input type="text"
             ref={ el => this._input = el }
             onChange={this.handleType}
             placeholder="Type keywords to search..."/>
    );
  }
}

export default connect()(SearchBox);
