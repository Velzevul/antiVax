import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPage} from '../store/pagesActions';


class FaqItem extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props,
          {itemId} = this.props.params;

    dispatch(fetchPage(itemId));
  }

  render() {
    const {isFetching, title, content} = this.props,
          {query} = this.props.location;

    if (isFetching) {
      return (
        <div>loading...</div>
      )
    } else {
      return (
        <div>
          <Link to={{pathname: '/questions', query: {show: query.show}}}>&lt;Back</Link>
          <div>
            {title}
          </div>

          <div>
            {content}
          </div>
        </div>
      );
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {itemId} = ownProps.params,
          item = state.pages[itemId];

    return {
      isFetching: item ? item.isFetching : false,
      title: item ? item.title : '',
      content: item ? item.content : ''
    };
  }
)(FaqItem);
