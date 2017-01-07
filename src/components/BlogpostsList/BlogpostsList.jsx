import React from 'react'

import {List, ListItem} from '../Layouts'
import BlogpostsListItem from '../BlogpostsListItem'

import styles from './BlogpostsList.css'

const BlogpostsList = ({
  parentSection,
  section,
  blogposts,
  children,
  params
}) => {
  return (
    <div className={styles.BlogpostsList}>
      <div className={styles.BlogpostsList__header}>
        {parentSection.sectionType !== 'meta'
          ? <div className={styles.BlogpostsList__subtitle}>{parentSection.title}</div>
          : ''
        }
        <div className={styles.BlogpostsList__title}>{section.title}</div>
      </div>

      <div className={styles.BlogpostsList__body}>
        {params.articleUrl
          ? children
          : (
            <List n={4}>
              {blogposts.map(blogpost => {
                let link = ''
                if (parentSection.sectionType === 'meta') {
                  link = `/${section.url}/articles/${blogpost.url}`
                } else {
                  link = `/${parentSection.url}/${section.url}/articles/${blogpost.url}`
                }

                return (
                  <ListItem
                    n={4}
                    key={blogpost._id}>
                    <BlogpostsListItem
                      link={link}
                      blogpost={blogpost} />
                  </ListItem>
                )
              })}
            </List>
          )
        }
      </div>
    </div>
  )
}

export default BlogpostsList
