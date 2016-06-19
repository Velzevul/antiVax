import React from 'react'

import StaticItem from '../StaticItem'

import {Article} from '../../Common'
import {Block} from '../../Layouts'

const StaticPage = ({
  page,
  params
}) => {
  return (
    <div>
      <Block n={2}>
        <Article article={page} />
      </Block>

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
