import React from 'react';
import {Link} from 'react-router';


const SearchResultsItem = ({
  item
}) => {
  let itemUrl = `/${item.section}/`;

  if (item.parent) {
    itemUrl += `${item.parent}/`;
  }

  itemUrl += item.id;

  return (
    <div>
      <div>
        <Link to={itemUrl}>{item.title}</Link>
      </div>

      <div>{item._snippetResult.content.value}</div>
    </div>
  )
};

export default SearchResultsItem;
