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

class SectionContainer extends React.Component {
  componentWillMount () {
    const {currentSection, sections, params} = this.props

    if (currentSection.sectionType === 'parent' && !params.subsectionUrl) {
      const targetSubSection = sections.find(s => s._id === currentSection.children[0])

      hashHistory.push(`/${currentSection.url}/${targetSubSection.url}`)
    }
  }

  componentWillReceiveProps (newProps) {
    const {currentSection, sections, params} = this.props

    if (currentSection.sectionType === 'parent' && !params.subsectionUrl) {
      const targetSubSection = sections.find(s => s._id === currentSection.children[0])

      hashHistory.push(`/${currentSection.url}/${targetSubSection.url}`)
    }
  }

  render () {
    const {currentSection, parent, params, children, articles, windowWidth, widthThreshold} = this.props

    if (params.subsectionUrl) {
      return children
    } else {
      switch (currentSection.sectionType) {
        case 'blogposts':
          const sectionBlogposts = currentSection.articles
          .map(a => articles.find(art => art._id === a))
          .filter(a => a.isPublished)

          return (
            <Wrapper
              width={90}
              maxWidth={45}>
              <BlogpostsList
                children={children}
                params={params}
                parentSection={parent}
                section={currentSection}
                blogposts={sectionBlogposts} />
            </Wrapper>
          )
        case 'articles':
          const sectionArticles = currentSection.articles
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
                      parentSection={parent}
                      section={currentSection}
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
                      parentSection={parent}
                      section={currentSection}
                      articles={sectionArticles} />
                  </Wrapper>
                </Block>

                <AskQuestionContainer />
              </div>
            )
          }
        case 'custom':
          switch (currentSection.customId) {
            case 'home':
              return <CustomHomepage section={currentSection} />
            case 'about':
              return <CustomAbout section={currentSection} />
            case 'schedule':
              return <CustomSchedule section={currentSection} />
            default:
              return <div></div>
          }
        default:
          return <div></div>
      }
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {params} = ownProps
    const currentSection = state.sections.items.find(s => s.url === params.sectionUrl)

    return {
      currentSection,
      parent: state.sections.items.find(s => s._id === currentSection.parent),
      sections: state.sections.items,
      articles: state.articles.items,
      windowWidth: state.ui.windowWidth,
      widthThreshold: state.ui.widthThreshold
    }
  }
)(SectionContainer)
