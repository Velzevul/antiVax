import React from 'react'
import {connect} from 'react-redux'

import styles from './Questions.css'

import {Block, Wrap, Grid, GridItem, Media, MediaBody, MediaFigure} from '../Layouts'
import {Heading1} from '../Typography'
import SideNav from '../SideNav'
import SideBar from '../SideBar'
import Body from '../Body'
import AskQuestionSide from '../AskQuestionSide'
import QuestionForm from '../QuestionForm'

import img from './jen.jpg'

const Questions = ({
  faqs,
  children,
  params
}) => {
  const navItems = faqs.map(f => {
    return {
      url: `${PUBLIC_PATH}/questions/${f.url}`,
      title: f.title
    }
  })

  let content = ''
  if (params.faqId) {
    content = children
  } else {
    content = (
      <div className={styles.QuestionsIntro}>
        <Block n={3}>
          <Media alignItems="center">
            <MediaFigure n={3}>
              <img src={img} className={styles.QuestionsIntro__image} />
            </MediaFigure>

            <MediaBody>
              <Block>
                <Heading1>Have a question?</Heading1>
              </Block>

              <div className={styles.QuestionsIntro__text}>
                <strong>Dr. Jennifer Potter</strong>, our vaccine specialist,<br />will be glad to assist you with your questions
              </div>
            </MediaBody>
          </Media>
        </Block>

        <QuestionForm />
      </div>
    )
  }

  return (
    <Wrap>
      <Grid>
        <GridItem span={1} outOf={3}>
          <SideBar>
            {params.faqId
            ? <Block n={6}>
              <AskQuestionSide />
            </Block>
            : null
            }

            <SideNav
              title="Frequently Asked Questions"
              navItems={navItems} />
          </SideBar>
        </GridItem>

        <GridItem>
          <Body>
            {content}
          </Body>
        </GridItem>
      </Grid>
    </Wrap>
  )
}

export default connect(
  (state) => {
    return {
      faqs: state.articles.items.filter(a => a.isPublished && a.type.id === 'faqs')
    }
  }
)(Questions)
