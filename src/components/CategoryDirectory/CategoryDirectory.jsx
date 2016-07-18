import React from 'react'
import {connect} from 'react-redux'

import {PageLink} from '../UI'
import {List, ListItem} from '../Layouts'

const CategoryDirectory = ({
  items,
  sectionId,
  articleId
}) => {
  return (
    <List>
      {items.map(i =>
        <ListItem key={i._id}>
          <PageLink to={`${PUBLIC_PATH}/${sectionId}/${articleId}/${i.url}`}>{i.title}</PageLink>
        </ListItem>
      )}
    </List>
  )
}

export default connect(
  (state, ownProps) => {
    const {category} = ownProps

    return {
      items: state.articles.items.filter(a => a.isPublished && a.type.id === category)
    }
  }
)(CategoryDirectory)
