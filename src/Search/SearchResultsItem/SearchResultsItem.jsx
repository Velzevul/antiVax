import React from 'react';
import {Link} from 'react-router';

import styles from './SearchResultsItem.css';
import layouts from '../../styles/layouts.css';
import typography from '../../styles/typography.css';


const SearchResultsItem = ({
  item
}) => {
  let itemUrl = `/${item.section}/`;

  if (item.parent) {
    itemUrl += `${item.parent}/`;
  }

  itemUrl += item.id;

  return (
    <div className={styles.SearchResultsItem}>
      <div className={layouts.block}>
        <Link to={itemUrl} className={typography.hTertiary}>{item.title}</Link>
      </div>
      
      <div className={layouts.block}>
        <Link to={itemUrl} className={typography.hTertiary}>{item.title}</Link>
      </div>

      <div className={styles.SearchResultsItem__body}>
        <div className={typography.text} dangerouslySetInnerHTML={{__html: item._snippetResult.content.value}}></div>
      </div>
    </div>
  )
};

export default SearchResultsItem;
