import React from 'react'
import {connect} from 'react-redux'

import {Link} from '../UI'
import {List, ListItem} from '../Layouts'

const CategoryDirectory = ({
  items,
  sectionId,
  articleId
}) => {
  return (
    <List>
      {items
        .sort((a, b) => {
          return a.order - b.order
        })
        .map(i =>
          <ListItem key={i._id}>
            <Link to={`${PUBLIC_PATH}/${sectionId}/${articleId}/${i.url}`}>{i.title}</Link>
          </ListItem>
        )
      }
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
