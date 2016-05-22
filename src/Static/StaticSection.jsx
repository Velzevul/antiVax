import React from 'react';
import {Link} from 'react-router';
import {fetchSection} from './staticActions';
import { connect } from 'react-redux';

class StaticSection extends React.Component {
  componentWillMount() {
    const { dispatch, sectionId } = this.props;
    dispatch(fetchSection(sectionId));
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch, sectionId} = nextProps;

    if (sectionId !== this.props.sectionId) {
      dispatch(fetchSection(sectionId));
    }
  }

  render() {
    const {sectionId, isFetching, pages, children} = this.props;

    let content;
    if (isFetching) {
      content = (
        <div>
          <div>loading...</div>
        </div>
      );
    } else {
      content = (
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

    return content;
  }
}

export default connect(
  (state, ownProps) => {
    const {section: sectionId} = ownProps.params,
          section = state.sections[sectionId];
    
    return {
      sectionId,
      isFetching: section ? section.isFetching : false,
      pages: section ? section.pages.map(p => state.entities[p]) : []
    };
  }
)(StaticSection);
