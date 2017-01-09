import React from 'react'
import {connect} from 'react-redux'

import Wrapper from '../Layouts/Wrapper'
import {Grid, GridItem} from '../Layouts/Grid'
import Box from '../Layouts/Box'
import Signature from '../Signature'
import QuestionForm from '../QuestionForm'
import Block from '../Layouts/Block'
import Heading1 from '../Typography/Heading1'
import Heading2 from '../Typography/Heading2'
import HeadingLined from '../Typography/HeadingLined'
import Text from '../Typography/Text'
import ListOfArticles from '../ListOfArticles'
import Button from '../UI/Button'

import styles from './CustomPageHome.css'

const CustomPageHome = ({
  frequentArticles,
  frequentSection,
  frequentSubsecions,
  articles,
  layout
}) => {
  let WelcomeGridSize = 0
  let welcomeBox = 0
  let frequentGridSize = 0
  let frequentBox = 0
  let askQuestionGridSize = 0
  let askQuestionBox = 0

  switch (layout) {
    case 's':
      WelcomeGridSize = 1
      welcomeBox = 4
      frequentGridSize = 1
      frequentBox = 4
      askQuestionGridSize = 1
      askQuestionBox = 4
      break
    case 'm':
      WelcomeGridSize = 1
      welcomeBox = 4
      frequentGridSize = 2
      frequentBox = 4
      askQuestionGridSize = 1
      askQuestionBox = 4
      break
    case 'l':
      WelcomeGridSize = 2
      welcomeBox = 4
      frequentGridSize = 3
      frequentBox = 8
      askQuestionGridSize = 2
      askQuestionBox = 8
      break
    case 'xl':
      WelcomeGridSize = 2
      welcomeBox = 8
      frequentGridSize = 4
      frequentBox = 8
      askQuestionGridSize = 2
      askQuestionBox = 8
      break
    default:
      console.error(`unexpected layout value ${layout}`)
  }

  const frequentArticlesEl = (
    <section className={styles.FrequentSection}>
      <Block>
        <HeadingLined>Frequent Questions</HeadingLined>
      </Block>

      <Wrapper>
        <Box n={frequentBox}>
          <Grid
            gutterBottom={4}>
            {frequentSubsecions.map((sub, index) => {
              const subSectionArticles = sub.articles
              .map(a => articles.find(art => art._id === a))
              .filter(a => a.isPublished && a.articleType === 'article')
              .slice(0, 5)

              return (
                <GridItem
                  key={index}
                  gutterBottom={4}
                  span={1}
                  outOf={frequentGridSize}>
                  <Block n={1}>
                    <Heading2 underline>{sub.title}</Heading2>
                  </Block>

                  <Block n={2}>
                    <ListOfArticles articles={subSectionArticles} />
                  </Block>

                  <Button to={`/${frequentSection.url}/${sub.url}`}>see more</Button>
                </GridItem>
              )
            })}
          </Grid>
        </Box>
      </Wrapper>
    </section>
  )

  return (
    <div>
      <section className={styles.WelcomeSection}>
        <Wrapper>
          <div className={styles.WelcomeSection__body}>
            <Grid
              justifyContent="flex-end">
              <GridItem
                span={1}
                outOf={WelcomeGridSize}>
                <Box
                  n={welcomeBox}>
                  <Block n={2}>
                    <Heading1>What is “Vaccine Answers”</Heading1>
                  </Block>

                  <Block>
                    <Text>The main purpose of our website is to provide people with valid information about vaccines, such as validity of vaccine myths and rumors, information on vaccine safety, vaccine schedule, etc. If you cannot find information you want, or you would rather just get a quick response to your specific question, please do not hesitate to send your question to me. I try to reply in a timely manner and I also provide list of official sources for your further exploration.</Text>
                  </Block>

                  <Signature />
                </Box>
              </GridItem>
            </Grid>
          </div>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <Box n={askQuestionBox}>
            <Grid
              alignItems="center"
              gutterBottom={2}>
              <GridItem
                gutterBottom={2}
                span={1}
                outOf={askQuestionGridSize}>
                <Block n={2}>
                  <Heading1>Have a Question?</Heading1>
                </Block>

                <Block n={1}>
                  <Text>If you do not want to search through the website or cannot find answer to your question, please do not hesitate to send    your question directly to me. I will reply to you with all the information you should know as soon as I can.</Text>
                </Block>

                <Signature />
              </GridItem>

              <GridItem
                gutterBottom={2}
                span={1}
                outOf={askQuestionGridSize}>
                <QuestionForm type="full" />
              </GridItem>
            </Grid>
          </Box>
        </Wrapper>
      </section>

      {frequentArticlesEl}
    </div>
  )
}

export default connect(
  state => {
    const frequentSection = state.sections.items.find(s => s.customId === 'frequent-questions')
    const frequentSubsecions = frequentSection.children.map(ch => state.sections.items.find(s => s._id === ch))

    return {
      frequentSection,
      frequentSubsecions,
      articles: state.articles.items,
      layout: state.ui.layout
    }
  }
)(CustomPageHome)
