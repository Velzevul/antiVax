import React from 'react'
import {browserHistory} from 'react-router'
import { connect } from 'react-redux'

import {Spinner} from '../../UI'
import {fetchSection} from '../../store/sectionsActions'
import {Wrap, Grid, GridItem} from '../../Layouts'
import {SideBar, SideNav, Body} from '../../Common'

class StaticSection extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props
    const {sectionId} = this.props.params

    dispatch(fetchSection(sectionId))
  }

  componentWillReceiveProps (nextProps) {
    const {dispatch, pages} = nextProps
    const {sectionId, pageId} = nextProps.params

    if (sectionId !== this.props.params.sectionId) {
      dispatch(fetchSection(sectionId))
    }

    if ((pageId === undefined) && (pages.length > 0)) {
      browserHistory.push(`/${sectionId}/${pages[0].id}`)
    }
  }

  render () {
    const {isFetching, title, params, children} = this.props
    const {sectionId, pageId} = params
    const pages = this.props.pages.map(p => {
      return Object.assign({}, p, {
        path: `/${sectionId}/${p.id}`,
        label: p.title
      })
    })

    if (isFetching) {
      return (
        <Spinner />
      )
    } else {
      const page = pages.filter(p => p.id === pageId)[0] || pages[0]

      return (
        <Wrap>
          <Grid>
            <GridItem span={1} outOf={4}>
              <SideBar>
                <SideNav title={title} items={pages} />
              </SideBar>
            </GridItem>

            <GridItem>
              <Body>
                {React.cloneElement(children, {page})}
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
    const {sectionId} = ownProps.params
    const section = state.sections[sectionId]

    return {
      isFetching: section ? section.isFetching : true,
      pages: section ? section.pages : [],
      title: section ? section.title : ''
    }
  }
)(StaticSection)
