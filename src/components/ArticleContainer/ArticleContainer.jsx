import React from 'react'
import {connect} from 'react-redux'

import Article from '../Article'

const ArticleContainer = ({
  article
}) => {
  return (
    <Article article={article} />
  )
}

export default connect(
  (state, ownProps) => {
    const {params} = ownProps
    const article = state.articles.items.find(a => a.url === params.articleUrl)

    return {
      article
    }
  }
)(ArticleContainer)
