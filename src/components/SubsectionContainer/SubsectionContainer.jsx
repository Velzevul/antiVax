import React from 'react'
import {connect} from 'react-redux'

import ArticlesPage from '../ArticlesPage'

class SectionContainer extends React.Component {
  render () {
    const {currentSection, parentSection, params, children} = this.props

    switch (currentSection.sectionType) {
      case 'articles':
      case 'blogposts':
        return (
          <ArticlesPage
            currentSection={currentSection}
            parentSection={parentSection}
            children={children}
            params={params} />
        )
      default:
        console.error(`unexpected section type on 2nd level ${currentSection.sectionType}`)
        return <div></div>
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {params} = ownProps
    const currentSection = state.sections.items.find(s => s.url === params.subsectionUrl)
    const parentSection = state.sections.items.find(s => s.url === params.sectionUrl)

    // const sectionBlogposts = currentSection.articles
    // .map(a => articles.find(art => art._id === a))
    // .filter(a => a.isPublished)

    return {
      currentSection,
      parentSection
    }
  }
)(SectionContainer)
