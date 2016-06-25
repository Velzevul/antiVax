import React from 'react'
import {connect} from 'react-redux'
import {fetchSection} from '../../store/sectionsActions'

import {Block, Wrap, Grid, GridItem} from '../../Layouts'
import {Spinner} from '../../UI'
import {SideNav, SideBar, Body, Article} from '../../Common'
import QuestionsIntro from '../QuestionsIntro'
import AskQuestionSide from '../AskQuestionSide'
import {prefix} from '../../config'

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
      const navItems = pages.map(p => {
        return {
          path: `${prefix}/questions/${p.id}`,
          label: p.title
        }
      })

      let activeFaq = null

      if (params.itemId) {
        activeFaq = pages.filter(p => p.id === params.itemId)[0]
      }

      return (
        <Wrap>
          <Grid>
            <GridItem span={1} outOf={3}>
              <SideBar>
                {params.itemId
                  ? <Block n={6}>
                    <AskQuestionSide />
                  </Block>
                  : null
                }

                <SideNav title="Frequently Asked Questions"
                  items={navItems} />
              </SideBar>
            </GridItem>

            <GridItem>
              <Body>
                {params.itemId
                ? <Article article={activeFaq} />
                : <QuestionsIntro />
                }
              </Body>
            </GridItem>
          </Grid>
        </Wrap>
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
