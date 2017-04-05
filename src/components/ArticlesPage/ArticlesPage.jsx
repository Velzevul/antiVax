import React from 'react'
import {connect} from 'react-redux'
import Time from 'react-time'

import Wrapper from '../Layouts/Wrapper'
import Box from '../Layouts/Box'
import Block from '../Layouts/Block'
import Flex from '../Layouts/Flex'
import {Grid, GridItem} from '../Layouts/Grid'
import {List, ListItem} from '../Layouts/List'
import Heading1 from '../Typography/Heading1'
import Heading2 from '../Typography/Heading2'
import Heading3 from '../Typography/Heading3'
import Content from '../Typography/Content'
import Info from '../Typography/Info'
import LinkButton from '../UI/LinkButton'
import AskQuestion from '../AskQuestion'
import ListOfArticles from '../ListOfArticles'

const ArticlesPage = ({
  parentSection,
  currentSection,
  articles,
  layout,
  children,
  params
}) => {
  let gridSize = 0
  let articlesSpan = 0
  let questionsSpan = 0
  let boxSize = 0
  let questionsBoxSize = 0
  let formLayout = 'none'
  let articlesGridSize = 0

  switch (layout) {
    case 's':
    case 'm':
      gridSize = 1
      articlesSpan = 1
      questionsSpan = 1
      boxSize = 4
      questionsBoxSize = 2
      formLayout = 'full'
      articlesGridSize = 1
      break
    case 'l':
      gridSize = 12
      articlesSpan = 7
      questionsSpan = 5
      boxSize = parentSection ? 6 : 8
      questionsBoxSize = 6
      formLayout = 'stacked'
      articlesGridSize = 1
      break
    case 'xl':
      gridSize = 3
      articlesSpan = 2
      questionsSpan = 1
      boxSize = parentSection ? 6 : 8
      questionsBoxSize = 6
      formLayout = 'stacked'
      articlesGridSize = 1
      break
    default:
      console.error(`unexpected layout type ${layout}`)
  }

  let content = ''
  if (currentSection.sectionType === 'articles') {
    content = (
      <div>
        <Block n={2}>
          {parentSection
            ? (
              <Heading3>{parentSection.title}</Heading3>
            )
            : ''
          }
          <Heading1 underline>{currentSection.title}</Heading1>
        </Block>

        <Grid
          gutterBottom={1}>
          <GridItem
            gutterBottom={1}
            span={1}
            outOf={articlesGridSize}>
            <ListOfArticles articles={articles.slice(0, articles.length / 2)} />
          </GridItem>

          <GridItem
            gutterBottom={1}
            span={1}
            outOf={articlesGridSize}>
            <ListOfArticles articles={articles.slice(articles.length / 2)} />
          </GridItem>
        </Grid>
      </div>
    )
  } else if (currentSection.sectionType === 'blogposts') {
    content = (
      <div>
        <Block n={3}>
          <Heading1 underline>{currentSection.title}</Heading1>
        </Block>

        <List n={3}>
          {articles.map((a, index) => {
            const link = parentSection
              ? `/${params.sectionUrl}/${params.subsectionUrl}/articles/${a.url}`
              : `/${params.sectionUrl}/articles/${a.url}`

            return (
              <ListItem
                key={index}
                n={3}>
                <Info>Posted on <Time value={new Date(a.createdAt)} format="MMM Do, h:mA" /> by {a.lastModifiedBy}</Info>
                <Heading2
                  to={link}>{a.title}</Heading2>

                <Block n={0.5}>
                  <Content text={a.snippet} />
                </Block>

                <LinkButton to={link}>&#187; read full post</LinkButton>
              </ListItem>
            )
          })}
        </List>
      </div>
    )
  }

  return (
    <section>
      <Wrapper>
        <Grid
          gutterBottom={0}>
          <GridItem
            gutterBottom={0}
            span={articlesSpan}
            outOf={gridSize}>
            <Box n={boxSize}>
              {params.articleUrl
                ? children
                : content
              }
            </Box>
          </GridItem>

          <GridItem
            gutterBottom={0}
            span={questionsSpan}
            outOf={gridSize}>
            <Box n={questionsBoxSize}>
              <AskQuestion formLayout={formLayout} />
            </Box>
          </GridItem>
        </Grid>
      </Wrapper>
    </section>
  )
}

export default connect(
  (state, ownProps) => {
    const {currentSection} = ownProps
    const articles = currentSection.articles
      .map(a => state.articles.items.find(art => art._id === a))
      .filter(a => a.isPublished)

    return {
      articles,
      layout: state.ui.layout
    }
  }
)(ArticlesPage)
