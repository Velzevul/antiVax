import React from 'react'
import Time from 'react-time'
import {animateScroll} from 'react-scroll'
import {connect} from 'react-redux'

import {Heading1, Content} from '../Typography'
import {Wrap, Block, Flex} from '../Layouts'
import {Button} from '../UI'
import NotFound from '../NotFound'

import styles from './Blogpost.css'

class Blogpost extends React.Component {
  componentDidMount () {
    animateScroll.scrollTo(this._element.offsetTop - 100, {
      duration: 500
    })
  }

  render () {
    const {blogpost} = this.props

    if (blogpost) {
      return (
        <Wrap maxWidth="45rem">
          <div className={styles.blogpost} ref={el => { this._element = el }}>
            <Block n={1}>
              <Flex justifyContent="space-between">
                <div className={styles.blogpost__date}>Posted on <Time value={new Date(blogpost.createdAt)} format="MMM Do, h:mA" /></div>
              </Flex>
            </Block>

            <Block n={1.5}>
              <Heading1>{blogpost.title}</Heading1>
            </Block>

            <Block n={6}>
              <Content text={blogpost.content} />
            </Block>

            <Flex justifyContent="center">
              <Button
                large
                to={`${PUBLIC_PATH}/blog`}>back to all posts</Button>
            </Flex>
          </div>
        </Wrap>
      )
    } else {
      return (
        <NotFound />
      )
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {blogpostId}} = ownProps

    return {
      blogpost: state.articles.items.filter(a => a.isPublished && a.url === blogpostId)[0]
    }
  }
)(Blogpost)
