import React from 'react'

import {Article} from '../../Common'
import {Block, List, ListItem} from '../../Layouts'
import {PageLink} from '../../UI'

const StaticPage = ({
  page,
  params,
  children
}) => {
  const {sectionId, pageId, itemId} = params
  const item = page.items && page.items.find(i => i.id === itemId) || null

  if (item) {
    return React.cloneElement(children, {item})
  } else {
    return (
      <div>
        <Block n={2}>
          <Article article={page} />
        </Block>

        {page.items
          ? <List>
            {page.items.map(i =>
              <ListItem key={i.id}>
                <PageLink to={`/${sectionId}/${pageId}/${i.id}`}>{i.title}</PageLink>
              </ListItem>
            )}
          </List>
          : null
        }
      </div>
    )
  }
}

export default StaticPage
