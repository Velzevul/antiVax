import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {animateScroll} from 'react-scroll'

import styles from './SectionCategoryItem.css'
import Article from '../Article'
import NotFound from '../NotFound'

class SectionCategoryItem extends React.Component {
  componentDidMount () {
    animateScroll.scrollTo(this._element.offsetTop - 100, {
      duration: 500
    })
  }

  componentWillReceiveProps (nextProps) {
    animateScroll.scrollTo(this._element.offsetTop - 100, {
      duration: 500
    })
  }

  render () {
    const {item, params: {sectionId, articleId}} = this.props

    if (item) {
      return (
        <div ref={el => { this._element = el }} className={styles.SectionCategoryItem}>
          <Link
            to={`${PUBLIC_PATH}/${sectionId}/${articleId}`}
            className={styles.SectionCategoryItem__backlink}>back</Link>

          <Article article={item} />
        </div>
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
    const {params: {itemId}} = ownProps

    return {
      item: state.articles.items.filter(a => a.isPublished && a.url === itemId)[0]
    }
  }
)(SectionCategoryItem)
