import React from 'react'

import QuestionForm from '../QuestionForm'
import {Block, Media, MediaFigure, MediaBody} from '../../Layouts'
import {Heading1} from '../../Typography'
import styles from './QuestionsIntro.css'

const QuestionsIntro = () => {
  return (
    <div className={styles.QuestionsIntro}>
      <Block n={3}>
        <Media alignItems="center">
          <MediaFigure n={3}>
            <img src="/images/jen.jpg" className={styles.QuestionsIntro__image} />
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

export default QuestionsIntro
