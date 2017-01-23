import React from 'react'
import {connect} from 'react-redux'

import Link from '../Typography/Link'
import Heading2 from '../Typography/Heading2'
import {List, ListItem} from '../Layouts/List'
import {ListInline, ListInlineItem} from '../Layouts/ListInline'

import styles from './ListOfArticles.css'

const ListOfArticles = ({
  articleEntries,
  layout = 'stacked',
  inverse = false,
  n = 1.25,
  small = false
}) => {
  if (layout === 'stacked') {
    return (
      <List n={n}>
        {articleEntries.map((entry, index) => {
          let entryEl = ''
          if (entry.article.articleType === 'heading') {
            entryEl = (
              <div className={index > 0 ? styles.Heading : ''}>
                <Heading2>{entry.article.title}</Heading2>
              </div>
            )
          } else if (entry.article.articleType === 'article') {
            entryEl = (
              <Link
                small={small}
                inverse={inverse}
                to={entry.url}>{entry.article.title}</Link>
            )
          } else {
            console.error(`unexpected article type ${entry.article.articleType}`)
          }

          return (
            <ListItem
              n={n}
              key={index}>
              {entryEl}
            </ListItem>
          )
        })}
      </List>
    )
  } else if (layout === 'inline') {
    return (
      <ListInline n={n}>
        {articleEntries.map((entry, index) => {
          let entryEl = ''
          if (entry.article.articleType === 'heading') {
            entryEl = (
              <Heading2>{entry.article.title}</Heading2>
            )
          } else if (entry.article.articleType === 'article') {
            entryEl = (
              <Link
                small={small}
                inverse={inverse}
                to={entry.url}>{entry.article.title}</Link>
            )
          } else {
            console.error(`unexpected article type ${entry.article.articleType}`)
          }

          return (
            <ListInlineItem
              key={index}
              n={n}>
              {entryEl}
            </ListInlineItem>
          )
        })}
      </ListInline>
    )
  }
}

export default connect(
  (state, ownProps) => {
    let articleEntries = []

    for (let article of ownProps.articles) {
      let parents = []

      let currentParent = state.sections.items.find(s => s._id === article.parent)
      while (currentParent && !currentParent.meta) {
        parents = [currentParent.url, ...parents]
        currentParent = state.sections.items.find(s => s._id === currentParent.parent)
      }

      const articleUrl = `/${parents.join('/')}/articles/${article.url}`

      articleEntries.push({
        article,
        url: articleUrl
      })
    }

    return {
      articleEntries
    }
  }
)(ListOfArticles)
