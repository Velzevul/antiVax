import React from 'react'
import {connect} from 'react-redux'

import styles from './Footer.css'
import FooterNav from '../FooterNav'
import {Wrap, Grid, GridItem} from '../Layouts'

const contactNav = [
  {
    label: 'Jennifer Potter',
    emph: true
  },
  {
    label: '(204) 140-3849'
  },
  {
    label: 'jpotter@umanitoba.ca'
  }
]

const Footer = ({
  aboutProjectArticles,
  additionalInformationArticles
}) => {
  const aboutNav = aboutProjectArticles
    .sort((a, b) => {
      return a.order - b.order
    })
    .map(a => {
      return {
        label: a.title,
        path: `${PUBLIC_PATH}/${a.type.id}/${a.url}`
      }
    })

  const infoNav = additionalInformationArticles
    .sort((a, b) => {
      return a.order - b.order
    })
    .map(a => {
      return {
        label: a.title,
        path: `${PUBLIC_PATH}/${a.type.id}/${a.url}`
      }
    })

  return (
    <div className={styles.Bg}>
      <Wrap maxWidth="40rem">
        <div className={styles.Footer}>
          <Grid>
            <GridItem>
              <FooterNav items={contactNav} title="Contact" />
            </GridItem>

            <GridItem>
              <FooterNav items={aboutNav} title="About Project" />
            </GridItem>

            <GridItem>
              <FooterNav items={infoNav} title="Additional" />
            </GridItem>
          </Grid>
        </div>
      </Wrap>
    </div>
  )
}

export default connect(
  state => {
    return {
      aboutProjectArticles: state.articles.items.filter(i => i.isPublished && i.type.id === 'about-project'),
      additionalInformationArticles: state.articles.items.filter(i => i.isPublished && i.type.id === 'additional-information')
    }
  }
)(Footer)
