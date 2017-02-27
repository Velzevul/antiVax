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
                  <p>This project was conceived based on the experiences of Dr. Potter when she was a new parent interacting with other new parents around vaccines, which involved similar questions she would answer for parents in her family practice. This motivated her to create the Vaccine Answers website for plain language information about vaccines for Manitoba parents, with an added “ask a question” feature to address issues that may be difficult for parents to find reliable information about.</p>
                  <p>Based on the available evidence, we strongly feel that the benefits of vaccination greatly outweigh the risks for the vast majority of people, but we are not here to tell parents whether or not to vaccinate their children. Our goal is to provide reliable, evidence-based, up-to-date information about vaccination (both the pros and the cons) to help parents make their own decisions.</p>
                  <p>The first phase of this study is designed to refine this website for parents' use. It was funded by grants from the <a href="http://mmsf.ca/">Manitoba Medical Services Foundation</a> and <a href="http://www.wpgfdn.org/">The Winnipeg Foundation</a>. The second phase of this study will look at the effectiveness of the website to reduce parents' hesitancy around childhood vaccination.</p>
                  <p>Please note that we provide general information, not medical advice, on this site. If you have questions specific to your child, we will refer you to your primary care provider. (For example, “what are the side effects of the chicken pox vaccine?” is a question we can answer. “Should my child get the chicken pox vaccine?” should be directed to your health care provider.)</p>
                `} />
            </section>
          </Block>

          <section>
            <Block n={boxSize - 2}>
              <HeadingLined>About Us</HeadingLined>
            </Block>

            <Content text={`
                <p><strong>Jen Potter MD B.Sc. CCFP</strong> is a family physician at Kildonan Medical Centre, where she teaches family medicine residents and other learners in the Department of Family Medicine with the University of Manitoba. She is the study lead for this project, which was born out of her experience as both a doctor and as a parent. Dr. Potter’s role as site moderator is to generate and maintain the information presented, to ensure that all information is based on proven evidence, and to answer questions from parents.</p>
                <p><strong>S. Michelle Driedger</strong> is a Professor and Canada Research Chair in Environment and Health Risk Communication in the Department of Community Health Sciences at the University of Manitoba. There is a great deal of confusing and conflicting information out there, and fundamentally better communication and access to credible information is needed for Manitobans to feel comfortable in the decisions they make for themselves and their families. Dr. Driedger’s main area of research involves understanding people’s concerns about different public health issues and the recommendations that health professionals provide. In this project, she is working with parents involved in the testing phase of the website and for providing general guidance on plain language content.</p>
                <p><strong>Ryan Maier</strong> is a research analyst and study coordinator in the Department of Community Health Sciences at the University of Manitoba. His current main areas of research and interest are in health history and policy as well as the factors that influence people’s beliefs and attitudes towards health topics, such as vaccines. His role in this project is to coordinate all aspects of the project’s procedures and in working with parents who are testing the website.</p>
                <p><strong>Andrea Bunt</strong> is an Associate Professor in the Department of Computer Science Department at the University Manitoba. Dr. Bunt’s research is in the area of Human-Computer Interaction, which explores how people interact with computers and how to design technology to better support their needs. In this project she is helping with the overall design of the website, including using feedback from parents to improve it.</p>
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
