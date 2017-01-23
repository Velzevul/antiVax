import React from 'react'

import Block from '../Layouts/Block'
import Heading2 from '../Typography/Heading2'
import Content from '../Typography/Content'
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
            <Content text={`
                <p>Not quite finding what you’re looking for? Want something explained further? Have a question about something you found elsewhere? Want a copy of a study we’ve cited? Send in your question and I’ll email you back.</p>
              `} />
          </Block>

          <Signature />
        </div>
      </Block>

      <QuestionForm type={formLayout} />
    </div>
  )
}

export default AskQuestion
