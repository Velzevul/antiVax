import React from 'react'

import Block from '../Layouts/Block'
import Heading2 from '../Typography/Heading2'
import Text from '../Typography/Text'
import Signature from '../Signature'
import QuestionForm from '../QuestionForm'

import styles from './AskQuestion.css'

const AskQuestion = ({
  formLayout
}) => {
  return (
    <div className={styles.AskQuestion}>
      <Block>
        <div className={styles.AskQuestion__header}>
          <Heading2>Ask a Question</Heading2>
        </div>
      </Block>

      <Block>
        <div className={styles.AskQuestion__body}>
          <Block n={0.5}>
            <Text>If you would rather ask your question than search the entire website, don’t hesitate to send your question to us!</Text>
          </Block>

          <Signature />
        </div>
      </Block>

      <QuestionForm type={formLayout} />
    </div>
  )
}

export default AskQuestion
