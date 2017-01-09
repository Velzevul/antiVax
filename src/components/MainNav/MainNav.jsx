import React from 'react'
import {Link, hashHistory} from 'react-router'
import {connect} from 'react-redux'

import Select from '../UI/Select'
import Flex from '../Layouts/Flex'
import Box from '../Layouts/Box'
import Wrapper from '../Layouts/Wrapper'

import styles from './MainNav.css'

class MainNav extends React.Component {
  constructor (props) {
    super(props)

    this.navigate = this.navigate.bind(this)
  }

  navigate (url) {
    hashHistory.push(url)
  }

  render () {
    const {params, layout, sections} = this.props
    const metaSection = sections.find(s => s.meta && s.url === 'main-nav')
    const rootSections = metaSection.children.map(c => sections.find(s => s._id === c))

    switch (layout) {
      case 's':
        let flatNavigation = []
        for (let section of rootSections) {
          if (section.sectionType === 'parent') {
            const subsections = section.children.map(c => sections.find(s => s._id === c))

            for (let subsection of subsections) {
              flatNavigation.push({
                label: `${section.title} / ${subsection.title}`,
                id: `/${section.url}/${subsection.url}`
              })
            }
          } else {
            flatNavigation.push({
              label: section.title,
              id: `/${section.url}`
            })
          }
        }

        return (
          <div className={styles.Navigation}>
            <Wrapper>
              <Box n={1}>
                <Select
                  inverse
                  value={params.subsectionUrl
                    ? `/${params.sectionUrl}/${params.subsectionUrl}`
                    : `/${params.sectionUrl}`
                  }
                  options={flatNavigation}
                  onChange={url => { this.navigate(url) }} />
              </Box>
            </Wrapper>
          </div>
        )
      case 'm':
      case 'l':
      case 'xl':
        const currentSection = rootSections.find(s => s.url === params.sectionUrl)
        const currentSubsections = currentSection && currentSection.sectionType === 'parent'
          ? currentSection.children.map(c => sections.find(s => s._id === c))
          : null

        let currentSubNav = ''
        if (currentSubsections) {
          currentSubNav = (
            <div className={styles.Subnavigation}>
              <Wrapper>
                <Flex>
                  {currentSubsections.map((s, index) =>
                    <Link
                      key={index}
                      className={styles.Subnavigation__item}
                      activeClassName={styles.Subnavigation__item_active}
                      to={`/${currentSection.url}/${s.url}`}>{s.title}</Link>
                  )}
                </Flex>
              </Wrapper>
            </div>
          )
        }

        return (
          <div>
            <div className={styles.Navigation}>
              <Wrapper>
                <Flex>
                  {rootSections.map((s, i) => {
                    let activeClassNames = [styles.Navigation__item_active]
                    if (s.sectionType === 'parent') {
                      activeClassNames.push(styles.Navigation__item_parent_active)
                    }

                    return (
                      <Link
                        key={i}
                        to={`/${s.url}`}
                        className={styles.Navigation__item}
                        activeClassName={activeClassNames.join(' ')}>{s.title}</Link>
                    )
                  })}
                </Flex>
              </Wrapper>
            </div>

            {currentSubNav}
          </div>
        )
      default:
        console.error(`unexpected layout type ${layout}`)
        return <div />
    }
  }
}

export default connect(
  state => {
    return {
      sections: state.sections.items,
      layout: state.ui.layout
    }
  }
)(MainNav)
