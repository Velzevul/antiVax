import React from 'react'
import {connect} from 'react-redux'

import NotFound from '../NotFound'
import Article from '../Article'

const Faq = ({
  faq
}) => {
  if (faq) {
    return (
      <Article article={faq} />
    )
  } else {
    return (
      <NotFound />
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {faqId}} = ownProps

    return {
      faq: state.articles.items.filter(a => a.isPublished && a.url === faqId)[0]
    }
  }
)(Faq)
