import React from 'react'
import {connect} from 'react-redux'

import {Grid, GridItem} from '../Layouts/Grid'
import Wrapper from '../Layouts/Wrapper'
import Box from '../Layouts/Box'
import Block from '../Layouts/Block'
import HeadingLined from '../Typography/HeadingLined'
import Content from '../Typography/Content'

import styles from './CustomPageAbout.css'
import img from './team.jpg'

const CustomPageAbout = ({
  layout
}) => {
  let gridSize = 0
  let boxSize = 0

  switch (layout) {
    case 's':
    case 'm':
      gridSize = 1
      boxSize = 4
      break
    case 'l':
    case 'xl':
      gridSize = 1
      boxSize = 6
      break
    default:
      console.error(`unexpected layout value ${layout}`)
  }

  return (
    <article>
      <figure className={styles.AboutSection}>
        <img src={img} className={styles.AboutSection__img} />

        <figcaption className={styles.AboutSection__caption}>
          <Wrapper>
            The Vaccine Answers team (L-R): Ryan Maier, Michelle Driedger, Andrea Bunt and Jen Potter.
          </Wrapper>
        </figcaption>
      </figure>

      <Wrapper maxWidth="50">
        <Box n={boxSize}>
          <Block n={boxSize}>
            <section>
              <Block n={boxSize - 2}>
                <HeadingLined>About The Project</HeadingLined>
              </Block>

              <Content text={`
                  <p>Vaccine Answers is a website being developed to try to address parental concerns about childhood vaccinations. Based on the available evidence, we strongly feel that the benefits of vaccination greatly outweigh the risks for the vast majority of people, but we are not here to tell parents whether or not to vaccinate their children. Our goal is to provide reliable, evidence-based, up-to- date information about vaccination (both the pros and the cons) to help parents make their own decisions.</p>
                  <p>This project was conceived based on the experiences of Jen Potter (site moderator and principal investigator of this study) when she was a new parent. The first phase of this study is designed to refine this website for parents' use. It was funded by grants from the <a href="http://mmsf.ca/">Manitoba Medical Services Foundation</a> and The <a href="http://www.wpgfdn.org/">Winnipeg Foundation</a>. The second phase of this study will look at the effectiveness of the website to reduce parents' hesitancy around childhood vaccination.</p>
                  <p>Please note that we provide general information, not medical advice, on this site. If you have questions specific to your child, we will refer you to your primary care provider. (For example, “what are the side effects of the chicken pox vaccine?” is a question we can answer. “Should my child get the chicken pox vaccine?” should be directed to your health care provider.)</p>
                `} />
            </section>
          </Block>

          <section>
            <Block n={boxSize - 2}>
              <HeadingLined>About Us</HeadingLined>
            </Block>

            <Content text={`
                <p><strong>Jen Potter MD B.Sc. CCFP</strong> is a family physician at Kildonan Medical Centre, where she teaches family medicine residents and other learners in the Department of Family Medicine with the University of Manitoba. She lives in Winnipeg with her husband, three daughters and a cat. She enjoys canoeing, music, knitting and going to the lake (ideally all at the same time!). Jen’s role on this site is to generate and maintain the information presented, and to answer questions from parents.</p>
                `} />
          </section>
        </Box>
      </Wrapper>
    </article>
  )
}

export default connect(
  state => {
    return {
      layout: state.ui.layout
    }
  }
)(CustomPageAbout)
