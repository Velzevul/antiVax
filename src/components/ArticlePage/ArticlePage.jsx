import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import Block from '../Layouts/Block'
import Heading1 from '../Typography/Heading1'
import Content from '../Typography/Content'
import Info from '../Typography/Info'
import Comments from '../Comments'
import LinkButton from '../UI/LinkButton'

const ArticlePage = ({
  article,
  params
}) => {
  const backLink = params.subsectionUrl
    ? `/${params.sectionUrl}/${params.subsectionUrl}`
    : `/${params.sectionUrl}`

  return (
    <article>
      {article.articleType === 'blogpost'
        ? (
          <Block n={0.5}>
            <Info>Posted on <Time value={new Date(article.createdAt)} format="MMM Do, h:mA" /></Info>
          </Block>
        )
        : ''
      }
      <Block n={2}>
        <Heading1>{article.title}</Heading1>
      </Block>

      <Block n={2}>
        <Content text={article.content} />
      </Block>

      <Block n={article.articleType === 'blogpost' ? 4 : 0}>
        <LinkButton to={backLink}>&#171; Back to the list</LinkButton>
      </Block>

      {article.articleType === 'blogpost'
        ? <Comments article={article} />
        : ''
      }
    </article>
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
)(ArticlePage)
