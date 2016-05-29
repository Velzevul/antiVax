import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {fetchSection} from '../store/sectionsActions';


class Blog extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props;

    dispatch(fetchSection('blogposts'));
  }

  render() {
    const {posts, isFetching} = this.props;

    if (isFetching) {
      return (
        <div>loading...</div>
      );
    } else {
      return (
        <div>
          {posts.map( p =>
            <div key={p.id}>
              <Link to={`/blog/${p.id}`}>{p.title}</Link>
              <div>{p.snippet}</div>
              <Link to={`/blog/${p.id}`}>Read full post</Link>
            </div>
          )}
        </div>
      );
    }
  }
}

export default connect(
  state => {
    const blogposts = state.sections.blogposts;

    return {
      posts: blogposts ? blogposts.pages : [],
      isFetching: blogposts ? blogposts.isFetching : true
    }
  }
)(Blog);
