import React from 'react'
import {Link} from 'react-router'

import Block from '../Layouts/Block'
import Content from '../Typography/Content'
import Heading2 from '../Typography/Heading2'
import Info from '../Typography/Info'
import LinkButton from '../UI/LinkButton'

const SearchResultsItem = ({
  item
}) => {
  return (
    <div>
      <Heading2>{item.title}</Heading2>
      <Content text={item._snippetResult.content.value} />
      <LinkButton to={`/${item.url}`}>{item.url}</LinkButton>
    </div>
  )
}

export default SearchResultsItem
