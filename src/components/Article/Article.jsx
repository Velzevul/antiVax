import React from 'react'
import Time from 'react-time'

import Content from '../Content'
import {Block} from '../Layouts'

import styles from './Article.css'

const Article = ({
  article
}) => {
  return (
    <div className={styles.Article}>
      {article.articleType === 'blogpost'
        ? (
          <Block n={0.5}>
            <div className={styles.Article__timestamp}>
              Posted on <Time value={new Date(article.createdAt)} format="MMM Do, h:mA" />
            </div>
          </Block>
        )
        : ''
      }
      <Block>
        <div className={styles.Article__title}>{article.title}</div>
      </Block>

      <Content text={article.content} />
    </div>
  )
}

export default Article
