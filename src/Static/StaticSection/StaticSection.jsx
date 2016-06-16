import React from 'react'
import {Link, browserHistory} from 'react-router'
import { connect } from 'react-redux'

import {Spinner} from '../../UI'
import StaticPage from '../StaticPage'
import {fetchSection} from '../../store/sectionsActions'

import styles from './StaticSection.css'
import layouts from '../../styles/layouts.css'
import typography from '../../styles/typography.css'

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
    const {isFetching, pages, title, params} = this.props
    const {sectionId, pageId} = params

    if (isFetching) {
      return (
        <Spinner />
      )
    } else {
      const page = pages.filter(p => p.id === pageId)[0] || pages[0]

      return (
        <div className={`${layouts.wrap} ${styles.StaticSection}`}>
          <div className={layouts.grid}>
            <div className={`${layouts.grid__item} ${layouts._3_12}`}>
              <div className={styles.StaticSection__sidebar}>
                <div className={styles.SidebarMenu}>
                  <div className={layouts.block2}>
                    <div className={styles.SidebarMenu__title}>
                      <h3 className={typography.hSecondary}>{title}</h3>
                    </div>
                  </div>

                  {pages.map(page =>
                    <Link to={`/${sectionId}/${page.id}`}
                      key={page.id}
                      activeClassName={styles.SidebarMenu__item_active}
                      className={styles.SidebarMenu__item}>{page.title}</Link>
                  )}
                </div>
              </div>
            </div>

            <div className={layouts.grid__item}>
              <div className={styles.StaticSection__body}>
                <StaticPage page={page} params={params} />
              </div>
            </div>
          </div>
        </div>
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
