import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux'


const StaticItem = ({
  item,
  pageId,
  sectionId
}) => {
  return (
    <div>
      <div>{item.name}</div>
      <Link to={`/${sectionId}/${pageId}`}>&lt;Back</Link>
      <div>{item.content}</div>
    </div>
  );
};

export default connect(
  (state, ownProps) => {
    const {item: itemId, page: pageId, section: sectionId} = ownProps.params,
          item = state.entities[itemId];

    return {
      sectionId,
      pageId,
      item
    };
  }
)(StaticItem);
