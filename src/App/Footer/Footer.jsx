import React from 'react'

import styles from './Footer.css'
import FooterNav from '../FooterNav'
import {Wrap, Grid, GridItem} from '../../Layouts'

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
const aboutNav = [
  {
    label: 'Moderator`s biography',
    path: '/moderator'
  },
  {
    label: 'History of the project',
    path: '/history'
  },
  {
    label: 'Project funding',
    path: '/funding'
  }
]
const infoNav = [
  {
    label: 'Terms of use',
    path: '/terms'
  },
  {
    label: 'Financing sources',
    path: '/financing'
  },
  {
    label: 'Privacy regulations',
    path: '/privacy'
  }
]

const Footer = () => {
  return (
    <div className={styles.Bg}>
      <Wrap maxWidth="40rem">
        <div className={styles.Footer}>
          <Grid>
            <GridItem>
              <FooterNav items={contactNav} title="Contact" />
            </GridItem>

            <GridItem>
              <FooterNav items={aboutNav} title="About Us" />
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

export default Footer
