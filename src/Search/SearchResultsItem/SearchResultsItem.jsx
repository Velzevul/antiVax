import React from 'react'

import {Breadcrumbs} from '../../UI'
import {Block} from '../../Layouts'
import {Content, Heading3} from '../../Typography'
import styles from './SearchResultsItem.css'

const SearchResultsItem = ({
  item
}) => {
  const itemUrl = item.parent
    ? `/${item.section}/${item.parent}/${item.id}`
    : `/${item.section}/${item.id}`

  const breadcrumbs = item.parent
    ? [{label: item.section, path: `${PUBLIC_PATH}/${item.section}`},
       {label: item.parent, path: `${PUBLIC_PATH}/${item.section}/${item.parent}`},
       {label: item.id, path: `${PUBLIC_PATH}/${item.section}/${item.parent}/${item.id}`}]
    : [{label: item.section, path: `${PUBLIC_PATH}/${item.section}`},
       {label: item.id, path: `${PUBLIC_PATH}/${item.section}/${item.id}`}]

  item.parent
    ? [item.section, item.parent, item.id]
    : [item.section, item.id]

  return (
    <div className={styles.SearchResultsItem}>
      <Heading3 linkTo={itemUrl}>{item.title}</Heading3>

      <Block n={0.5}>
        <Content text={item._snippetResult.content.value} extraClassNames={styles.SearchResultsItem__body} />
      </Block>

      <Breadcrumbs items={breadcrumbs} />
    </div>
  )
}

export default SearchResultsItem
