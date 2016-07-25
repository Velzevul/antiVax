import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import {Content, Heading1} from '../Typography'
import {Wrap, Block} from '../Layouts'
import {Button} from '../UI'

import styles from './Blog.css'

const Blog = ({
  blogposts,
  params,
  children
}) => {
  if (params.blogpostId) {
    return children
  } else {
    return (
      <Wrap maxWidth="45rem">
        <div className={styles.page}>
          {blogposts.map(p =>
            <Block key={p._id} n={6}>
              <div className={styles.entry}>
                <Block n={1}>
                  <div className={styles.entry__date}>
                    Posted on <Time value={new Date(p.createdAt)} format="MMM Do, h:mA" />
                  </div>
                </Block>

                <Block n={1.5}>
                  <Heading1 linkTo={`${PUBLIC_PATH}/blogposts/${p.url}`}>{p.title}</Heading1>
                </Block>

                <Block n={2}>
                  <div className={styles.entry__body}>
                    <Content text={p.snippet} />
                  </div>
                </Block>

                <div className={styles.entry__footer}>
                  <Button
                    to={`${PUBLIC_PATH}/blogposts/${p.url}`}>Read full post</Button>
                </div>
              </div>
            </Block>
          )}
        </div>
      </Wrap>
    )
  }
}

export default connect(
  state => {
    return {
      blogposts: state.articles.items.filter(a => a.isPublished && a.type.id === 'blogposts')
    }
  }
)(Blog)
