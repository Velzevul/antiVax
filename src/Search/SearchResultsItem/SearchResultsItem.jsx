import React from 'react'

import {Breadcrumbs, PageLink} from '../../UI'
import {Block} from '../../Layouts'
import {Content, Heading3} from '../../Typography'
import styles from './SearchResultsItem.css'

const SearchResultsItem = ({
  item
}) => {
  const itemUrl = item.parent
    ? `/${item.section}/${item.parent}/${item.id}`
    : `/${item.section}/${item.id}`

  let breadcrumbs = item.parent
    ? [item.section, item.parent, item.id]
    : [item.section, item.id]

  return (
    <div className={styles.SearchResultsItem}>
      <Heading3>
        <PageLink to={itemUrl}>{item.title}</PageLink>
      </Heading3>

      <Block n={0.5}>
        <Content text={item._snippetResult.content.value} extraClassNames={styles.SearchResultsItem__body} />
      </Block>

      <Breadcrumbs items={breadcrumbs} />
    </div>
  )
}

export default SearchResultsItem
