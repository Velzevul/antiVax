import React from 'react'
import {connect} from 'react-redux'
import {fetchSection} from '../../store/sectionsActions'

import {Spinner} from '../../UI'
import Faq from '../Faq'
import Contact from '../../Contact'

import styles from './QuestionsPage.css'
import layouts from '../../styles/layouts.css'
import typography from '../../styles/typography.css'
import states from '../../styles/states.css'

class QuestionsPage extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchSection('questions'))
  }

  render () {
    const {params, isFetching, pages} = this.props

    if (isFetching) {
      return <Spinner />
    } else {
      return (
        <div className={`${layouts.wrap} ${styles.QuestionsPage}`}>
          <div className={layouts.grid}>
            <div className={`${layouts.grid__item} ${layouts._2_10}`}>
              <div className={styles.QuestionsPage__sidebar}>
                <div className={layouts.block2}>
                  <div className={states.aligned_mid}>
                    <h3 className={typography.hSecondary}>Our Specialist</h3>
                  </div>
                </div>

                <Contact />
              </div>
            </div>

            <div className={layouts.grid__item}>
              <div className={styles.QuestionsPage__body}>
                <div className={layouts.block2}>
                  <h1 className={typography.hPrimary}>Frequent Questions</h1>
                </div>

                {pages.map(p =>
                  <Faq key={p.id}
                    faq={p}
                    params={params} />
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(
  (state) => {
    const faqSection = state.sections.questions

    return {
      isFetching: faqSection ? faqSection.isFetching : false,
      pages: faqSection ? faqSection.pages : []
    }
  }
)(QuestionsPage)
