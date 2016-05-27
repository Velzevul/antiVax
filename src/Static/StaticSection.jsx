import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

import {fetchSection} from '../store/sectionsActions';

class StaticSection extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props,
          {sectionId} = this.props.params;

    dispatch(fetchSection(sectionId));
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch} = nextProps,
          {sectionId} = nextProps.params;

    if (sectionId !== this.props.params.sectionId) {
      dispatch(fetchPage(sectionId));
    }
  }

  render() {
    const {isFetching, pages, children} = this.props,
          {sectionId} = this.props.params;

    if (isFetching) {
      return (
        <div>loading...</div>
      );
    } else {
      return (
        <div>
          <div>
            {pages.map( page =>
              <Link to={`/${sectionId}/${page.id}`} key={page.id} activeClassName="test">{page.title}</Link>
            )}
          </div>

          <div>
            {children}
          </div>
        </div>
      );
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {sectionId} = ownProps.params,
          section = state.sections[sectionId];

    return {
      isFetching: section ? section.isFetching : true,
      pages: section ? section.pages : []
    };
  }
)(StaticSection);
