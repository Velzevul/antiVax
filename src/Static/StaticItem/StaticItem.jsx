import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'

import {fetchPage} from '../../store/pagesActions';
import styles from './StaticItem.css';
import typography from '../../styles/typography.css';


class StaticItem extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props,
          {itemId} = this.props.params;

    dispatch(fetchPage(itemId));
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch} = nextProps,
          {itemId} = nextProps.params;

    if (itemId !== this.props.params.itemId) {
      dispatch(fetchPage(itemId));
    }
  }

  render() {
    const {isFetching, title, content} = this.props,
          {pageId, sectionId} = this.props.params;

    if (isFetching) {
      return (
        <div>loading...</div>
      );
    } else {
      return (
        <div>
          <div>{title}</div>
          <Link to={`/${sectionId}/${pageId}`}>&lt;Back</Link>
          <div className={typography.content} dangerouslySetInnerHTML={{__html: content}}></div>
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
      isFetching: item ? item.isFetching : true,
      title: item ? item.title : '',
      content: item ? item.content : ''
    };
  }
)(StaticItem);
