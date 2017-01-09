import React from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'

import ArticlesPage from '../ArticlesPage'
import CustomPageHome from '../CustomPageHome'
import CustomPageAbout from '../CustomPageAbout'
import CustomPageSchedule from '../CustomPageSchedule'

class SectionContainer extends React.Component {
  componentWillMount () {
    const {params, currentSection, firstSubsection} = this.props

    if (firstSubsection && !params.subsectionUrl) {
      hashHistory.push(`/${currentSection.url}/${firstSubsection.url}`)
    }
  }

  componentWillReceiveProps (newProps) {
    const {params, currentSection, firstSubsection} = newProps

    if (firstSubsection && !params.subsectionUrl) {
      hashHistory.push(`/${currentSection.url}/${firstSubsection.url}`)
    }
  }

  render () {
    const {currentSection, params, children} = this.props

    switch (currentSection.sectionType) {
      case 'parent':
        return children
      case 'blogposts':
      case 'articles':
        return (
          <ArticlesPage
            currentSection={currentSection}
            children={children}
            params={params} />
        )
      case 'custom':
        switch (currentSection.customId) {
          case 'home':
            return <CustomPageHome />
          case 'about':
            return <CustomPageAbout />
          case 'schedule':
            return <CustomPageSchedule />
          default:
            console.error(`unexpected custom section ${currentSection.customId}`)
            return <div></div>
        }
      default:
        console.error(`unexpected section type on 1st level ${currentSection.sectionType}`)
        return <div></div>
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {params} = ownProps
    const currentSection = state.sections.items.find(s => s.url === params.sectionUrl)
    const firstSubsection = currentSection.sectionType === 'parent' && currentSection.children.length
      ? state.sections.items.find(s => s._id === currentSection.children[0])
      : null

      // const sectionBlogposts = currentSection.articles
      // .map(a => articles.find(art => art._id === a))
      // .filter(a => a.isPublished)

    return {
      currentSection,
      firstSubsection
    }
  }
)(SectionContainer)
