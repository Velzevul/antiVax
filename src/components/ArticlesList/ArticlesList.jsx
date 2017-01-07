import React from 'react'
import {Link} from 'react-router'

import {List, ListItem} from '../Layouts'

import styles from './ArticlesList.css'

const ArticlesList = ({
  parentSection,
  section,
  articles,
  children,
  params
}) => {
  return (
    <div className={styles.ArticlesList}>
      <div className={`${styles.ArticlesList__header}
        ${parentSection.sectionType === 'meta' ? styles.ArticlesList__header_noSubtitle : ''}`}>
        {parentSection.sectionType !== 'meta'
          ? <div className={styles.ArticlesList__subtitle}>{parentSection.title}</div>
          : ''
        }
        <div className={styles.ArticlesList__title}>{section.title}</div>
      </div>

      <div className={styles.ArticlesList__body}>
        {params.articleUrl
          ? children
          : (
            <List n={2}>
              {articles.map(article => {
                if (article.articleType === 'heading') {
                  return (
                    <ListItem
                      n={1.5}
                      key={article._id}>
                      <div className={styles.ArticlesList__heading}>{article.title}</div>
                    </ListItem>
                  )
                } else {
                  let articleLink = ''
                  if (parentSection.sectionType === 'meta') {
                    articleLink = `/${section.url}/articles/${article.url}`
                  } else {
                    articleLink = `/${parentSection.url}/${section.url}/articles/${article.url}`
                  }

                  return (
                    <ListItem
                      n={2}
                      key={article._id}>
                      <Link
                        to={articleLink}
                        className={styles.ArticlesList__article}>{article.title}</Link>
                    </ListItem>
                  )
                }
              })}
            </List>
          )
        }
      </div>
    </div>
  )
}

export default ArticlesList
