import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {animateScroll} from 'react-scroll'

import Article from '../Article'
import styles from './SectionCategoryItem.css'

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

    return (
      <div ref={el => { this._element = el }} className={styles.SectionCategoryItem}>
        <Link
          to={`${PUBLIC_PATH}/${sectionId}/${articleId}`}
          className={styles.SectionCategoryItem__backlink}>back</Link>

        <Article article={item} />
      </div>
    )
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
