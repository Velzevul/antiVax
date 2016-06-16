import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import {Content, Heading1} from '../../Typography'
import {Wrap, Block} from '../../Layouts'
import {Spinner, Button} from '../../UI'
import Blogpost from '../Blogpost'
import {fetchSection} from '../../store/sectionsActions'

import styles from './Blog.css'

class Blog extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchSection('blogposts'))
  }

  render () {
    const {posts, isFetching, params} = this.props
    const {blogpostId} = params

    if (isFetching) {
      return (
        <Spinner />
      )
    } else if (blogpostId) {
      const post = posts.filter(p => p.id === blogpostId)[0]

      return (
        <Blogpost post={post} />
      )
    } else {
      return (
        <Wrap maxWidth="45rem">
          <div className={styles.page}>
            {posts.map(p =>
              <Block key={p.id} n={6}>
                <div className={styles.entry}>
                  <Block n={1}>
                    <div className={styles.entry__date}>
                      Posted on <Time value={new Date(p.createdAt)} format="MMM Do, h:mA" />
                    </div>
                  </Block>

                  <Block n={1.5}>
                    <Heading1 linkTo={`/blog/${p.id}`}>{p.title}</Heading1>
                  </Block>

                  <Block n={0.5}>
                    <div className={styles.entry__body}>
                      <Content text={p.snippet} />
                    </div>
                  </Block>

                  <div className={styles.entry__footer}>
                    <Button linkTo={`/blog/${p.id}`}>Read full post</Button>
                  </div>
                </div>
              </Block>
            )}
          </div>
        </Wrap>
      )
    }
  }
}

export default connect(
  state => {
    const blogposts = state.sections.blogposts

    return {
      posts: blogposts ? blogposts.pages : [],
      isFetching: blogposts ? blogposts.isFetching : true
    }
  }
)(Blog)
