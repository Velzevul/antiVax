import React from 'react';
import {connect} from 'react-redux';

import {fetchPage} from '../store/pagesActions';


class Blogpost extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props,
          {blogpostId} = this.props.params;

    dispatch(fetchPage(blogpostId));
  }

  render() {
    const {isFetching, title, content, createdAt, createdBy} = this.props;

    if (isFetching) {
      return (
        <div>loading...</div>
      )
    } else {
      return (
        <div>
          <h1>{title}</h1>
          <div>{createdBy} on {createdAt}</div>
          <div>{content}</div>
        </div>
      );
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {blogpostId} = ownProps.params,
          blogpost = state.pages[blogpostId];

    return {
      isFetching: blogpost ? blogpost.isFetching : true,
      title: blogpost ? blogpost.title : '',
      content: blogpost ? blogpost.content : '',
      createdAt: blogpost ? blogpost.createdAt: '',
      createdBy: blogpost ? blogpost.createdBy: ''
    }
  }
)(Blogpost);
