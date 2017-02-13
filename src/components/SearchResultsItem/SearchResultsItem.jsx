import React from 'react'

import Block from '../Layouts/Block'
import Content from '../Typography/Content'
import Heading2 from '../Typography/Heading2'
import Info from '../Typography/Info'
import LinkButton from '../UI/LinkButton'

import styles from './SearchResultsItem.css'

const SearchResultsItem = ({
  item
}) => {
  return (
    <div className={styles.SearchResultsItem}>
      <Heading2>{item.title}</Heading2>
      <Info>{item.url}</Info>
      <Block n={0.5}>
        <Content text={item._snippetResult.content.value} />
      </Block>
      <LinkButton to={`${item.url}`}>&#187; Go to the page</LinkButton>
    </div>
  )
}

export default SearchResultsItem
