import React from 'react'
import {Link} from 'react-router'

import {Block} from '../Layouts'
import {Content} from '../Typography'
import styles from './SearchResultsItem.css'

const SearchResultsItem = ({
  item
}) => {
  return (
    <div className={styles.SearchResultsItem}>
      <Link
        className={styles.SearchResultsItem__title}
        to={`${PUBLIC_PATH}/${item.url}`}>{item.title}</Link>

      <Block n={0.5}>
        <div className={styles.SearchResultsItem__url}>{item.url}</div>
      </Block>

      <Content text={item._snippetResult.content.value} extraClassNames={styles.SearchResultsItem__body} />
    </div>
  )
}

export default SearchResultsItem
