import React from 'react'
import {connect} from 'react-redux'

import Article from '../Article'
import CategoryDirectory from '../CategoryDirectory'
import VaccinationSchedule from '../VaccinationSchedule'
import {Block} from '../Layouts'
import NotFound from '../NotFound'

const SectionArticle = ({
  article,
  children,
  params
}) => {
  if (article) {
    if (params.itemId) {
      return children
    } else {
      let attachment = ''
      switch (article.attachment) {
        case 'vaccines':
        case 'diseases':
        case 'ingredients':
          attachment = (
            <CategoryDirectory
              sectionId={params.sectionId}
              articleId={params.articleId}
              category={article.attachment} />
          )
          break
        case 'schedule':
          attachment = (
            <VaccinationSchedule />
          )
          break
      }

      return (
        <div>
          <Block n={article.attachment ? 3 : 0}>
            <Article article={article} />
          </Block>

          {attachment}
        </div>
      )
    }
  } else {
    return (
      <NotFound />
    )
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {articleId}} = ownProps

    return {
      article: state.articles.items.filter(a => a.isPublished && a.url === articleId)[0]
    }
  }
)(SectionArticle)
