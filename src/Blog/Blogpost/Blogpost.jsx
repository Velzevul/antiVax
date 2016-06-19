import React from 'react'
import Time from 'react-time'
import {animateScroll} from 'react-scroll'

import {Heading1, Content} from '../../Typography'
import {Wrap, Block, Flex} from '../../Layouts'
import {Button} from '../../UI'

import styles from './Blogpost.css'

class Blogpost extends React.Component {
  componentDidMount () {
    animateScroll.scrollTo(this._element.offsetTop - 100, {
      duration: 500
    })
  }

  render () {
    const {post} = this.props

    return (
      <Wrap maxWidth="45rem">
        <div className={styles.blogpost} ref={el => { this._element = el }}>
          <Block n={1}>
            <Flex justifyContent="space-between">
              <div className={styles.blogpost__date}>Posted on <Time value={new Date(post.createdAt)} format="MMM Do, h:mA" /></div>
            </Flex>
          </Block>

          <Block n={1.5}>
            <Heading1>{post.title}</Heading1>
          </Block>

          <Block n={6}>
            <Content text={post.content} />
          </Block>

          <Flex justifyContent="center">
            <Button linkTo="/blog">back to all posts</Button>
          </Flex>
        </div>
      </Wrap>
    )
  }
}

export default Blogpost
