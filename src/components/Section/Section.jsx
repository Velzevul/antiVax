import React from 'react'
import {hashHistory} from 'react-router'
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
    const {params: {sectionId, articleId}, location, articles} = this.props

    if (isSection(sectionId)) {
      if (!articleId) {
        this.setState({
          notFound: false
        }, () => {
          hashHistory.push(`${PUBLIC_PATH}/${sectionId}/${articles[0].url}`)
        })
      }
    } else {
      this.setState({
        notFound: true
      })
    }
  }

  componentWillReceiveProps (newProps) {
    const {params: {sectionId, articleId}, location, articles} = newProps

    if (isSection(sectionId)) {
      if (!articleId) {
        this.setState({
          notFound: false
        }, () => {
          hashHistory.push(`${PUBLIC_PATH}/${sectionId}/${articles[0].url}`)
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
        <NotFound />
      )
    } else {
      const {params: {sectionId}, children, articles} = this.props
      const currentSection = getCurrentSection(sectionId)

      return (
        <Wrap>
          <Grid>
            <GridItem span={1} outOf={4}>
              <SideBar>
                <SideNav title={currentSection.label} articles={articles} />
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
