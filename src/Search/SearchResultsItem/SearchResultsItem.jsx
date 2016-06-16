import React from 'react';
import {Link} from 'react-router';

import styles from './SearchResultsItem.css';
import layouts from '../../styles/layouts.css';
import typography from '../../styles/typography.css';


const SearchResultsItem = ({
  item
}) => {
  const itemUrl = item.parent ?
    `/${item.section}/${item.parent}/${item.id}` :
    `/${item.section}/${item.id}`;


  return (
    <div className={styles.SearchResultsItem}>
      <div>
        <Link to={`/${item.section}`} className={typography.breadcrumb}>{item.section}</Link>
        {item.parent ?
          <Link to={`/${item.section}/${item.parent}`} className={typography.breadcrumb}>{item.parent}</Link> :
          null
        }
      </div>

      <div>
        <Link to={itemUrl} className={typography.hTertiary}>{item.title}</Link>
      </div>

      <div className={`${typography.text} ${styles.SearchResultsItem__body}`}
           dangerouslySetInnerHTML={{__html: item._snippetResult.content.value}}>
      </div>
    </div>
  )
};

export default SearchResultsItem;
