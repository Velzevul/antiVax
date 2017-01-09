import React from 'react'
import {connect} from 'react-redux'

import styles from './Footer.css'
import Box from '../Layouts/Box'
import Wrapper from '../Layouts/Wrapper'
import Flex from '../Layouts/Flex'
import ListOfArticles from '../ListOfArticles'

const Footer = ({
  articles
}) => {
  return (
    <div className={styles.Footer}>
      <Wrapper>
        <Box n={2}>
          <Flex justifyContent="space-between">
            <div className={styles.Footer__text}>Vaccine Answers &#169; 2017</div>

            <ListOfArticles
              n={1.5}
              inverse
              small
              articles={articles}
              layout="inline" />
          </Flex>
        </Box>
      </Wrapper>
    </div>
  )
}

export default connect(
  state => {
    const footerSection = state.sections.items.find(s => s.customId === 'footer-nav')
    const footerArticles = footerSection.articles.map(a => state.articles.items.find(art => art._id === a))

    return {
      articles: footerArticles
    }
  }
)(Footer)
