import React from 'react'
import {browserHistory} from 'react-router'
import { connect } from 'react-redux'

import {Wrap, Grid, GridItem} from '../Layouts'
import SideBar from '../SideBar'
import SideNav from '../SideNav'
import Body from '../Body'
import NotFound from '../NotFound'
import {getCurrentSection, isSection} from '../../config'

class Section extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      notFound: false
    }
  }

  componentWillMount () {
    const {params: {sectionId, articleId}, articles} = this.props

    if (isSection(sectionId)) {
      if (!articleId) {
        this.setState({
          notFound: false
        }, () => {
          browserHistory.push(`${PUBLIC_PATH}/${sectionId}/${articles[0].url}`)
        })
      }
    } else {
      this.setState({
        notFound: true
      })
    }
  }

  componentWillReceiveProps (newProps) {
    const {params: {sectionId, articleId}, articles} = newProps

    if (isSection(sectionId)) {
      if (!articleId) {
        this.setState({
          notFound: false
        }, () => {
          browserHistory.push(`${PUBLIC_PATH}/${sectionId}/${articles[0].url}`)
        })
      }
    } else {
      this.setState({
        notFound: true
      })
    }
  }

  render () {
    if (this.state.notFound) {
      return (
        <Wrap>
          <Body>
            <NotFound />
          </Body>
        </Wrap>
      )
    } else {
      const {params: {sectionId}, children, articles} = this.props
      const currentSection = getCurrentSection(sectionId)

      const navItems = articles
        .sort((a, b) => {
          return a.order - b.order
        })
        .map(a => {
          return {
            url: `${PUBLIC_PATH}/${a.type.id}/${a.url}`,
            title: a.title
          }
        })

      return (
        <Wrap>
          <Grid>
            <GridItem span={1} outOf={4}>
              <SideBar>
                <SideNav title={currentSection.label} navItems={navItems} />
              </SideBar>
            </GridItem>

            <GridItem>
              <Body>
                {children}
              </Body>
            </GridItem>
          </Grid>
        </Wrap>
      )
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {params: {sectionId}} = ownProps

    return {
      articles: state.articles.items.filter(a => a.isPublished && a.type.id === sectionId)
    }
  }
)(Section)
