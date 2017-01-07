import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import Wrapper from '../Wrapper'
import {Block, Media, MediaBody, MediaFigure} from '../Layouts'
import AskQuestionContainer from '../AskQuestionContainer'
import BlogpostsList from '../BlogpostsList'
import ArticlesList from '../ArticlesList'
import CustomHomepage from '../CustomHomepage'
import CustomAbout from '../CustomAbout'
import CustomSchedule from '../CustomSchedule'

class SubsectionContainer extends React.Component {
  render () {
    const {currentSubsection, currentSection, params, children, articles, windowWidth, widthThreshold} = this.props

    switch (currentSubsection.sectionType) {
      case 'blogposts':
        const blogposts = currentSubsection.articles
          .map(a => articles.find(art => art._id === a))
          .filter(a => a.isPublished)

        return (
          <Wrapper
            width={90}
            maxWidth={45}>
            <BlogpostsList
              children={children}
              params={params}
              parentSection={currentSection}
              section={currentSubsection}
              blogposts={blogposts} />
          </Wrapper>
        )
      case 'articles':
        const sectionArticles = currentSubsection.articles
          .map(a => articles.find(art => art._id === a))
          .filter(a => a.isPublished)

        if (windowWidth >= widthThreshold) {
          return (
            <Wrapper
              width={90}
              maxWidth={85}>
              <Media>
                <MediaBody>
                  <ArticlesList
                    children={children}
                    params={params}
                    parentSection={currentSection}
                    section={currentSubsection}
                    articles={sectionArticles} />
                </MediaBody>

                <MediaFigure
                  nl={3}
                  n={0}>
                  <AskQuestionContainer />
                </MediaFigure>
              </Media>
            </Wrapper>
          )
        } else {
          return (
            <div>
              <Block n={2}>
                <Wrapper
                  width={90}
                  maxWidth={85}>
                  <ArticlesList
                    children={children}
                    params={params}
                    parentSection={currentSection}
                    section={currentSubsection}
                    articles={sectionArticles} />
                </Wrapper>
              </Block>

              <AskQuestionContainer />
            </div>
          )
        }
      case 'custom':
        switch (currentSubsection.customId) {
          case 'home':
            return <CustomHomepage section={currentSubsection} />
          case 'about':
            return <CustomAbout section={currentSubsection} />
          case 'schedule':
            return <CustomSchedule section={currentSubsection} />
          default:
            return <div></div>
        }
      default:
        return <div></div>
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {params} = ownProps
    const currentSection = state.sections.items.find(s => s.url === params.sectionUrl)
    const currentSubsection = state.sections.items.find(s => s.url === params.subsectionUrl)

    return {
      currentSubsection,
      currentSection,
      sections: state.sections.items,
      articles: state.articles.items,
      windowWidth: state.ui.windowWidth,
      widthThreshold: state.ui.widthThreshold
    }
  }
)(SubsectionContainer)
