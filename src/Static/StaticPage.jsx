import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux'


const StaticPage = ({
  sectionId,
  pageId,
  itemId,
  title,
  content,
  items,
  children
}) => {
  let itemsContainer = '';

  if (items) {
    itemsContainer = (
      <div>
        <ul>
          {items.map( i =>
            <li key={i.id}>
              <div>
                { i.id === itemId ?
                  children :
                  <Link to={`/${sectionId}/${pageId}/${i.id}`} key={i.id} activeClassName="test">{i.name}</Link>
                }
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      {itemsContainer}
    </div>
  );
};

export default connect(
  (state, ownProps) => {
    const {item: itemId, page: pageId, section: sectionId} = ownProps.params,
          page = state.entities[pageId];

    return {
      sectionId,
      pageId,
      itemId,
      title: page ? page.title : '',
      content: page ? page.content : '',
      items: page && page.items ? page.items.map(i => state.entities[i]) : null
    };
  }
)(StaticPage);
