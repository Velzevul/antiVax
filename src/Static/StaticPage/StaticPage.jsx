import React from 'react'

import StaticItem from '../StaticItem'

import styles from './StaticPage.css'
import typography from '../../styles/typography.css'

const StaticPage = ({
  page,
  params
}) => {
  return (
    <div className={typography.content}>
      <h1>{page.title}</h1>

      <div dangerouslySetInnerHTML={{__html: page.content}}></div>

      {page.items
        ? <ul>
          {page.items.map(i =>
            <StaticItem item={i} params={params} />
          )}
        </ul>
        : null
      }
    </div>
  )
}

export default StaticPage
