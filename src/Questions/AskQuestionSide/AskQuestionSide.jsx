import React from 'react'

import styles from './AskQuestionSide.css'
import {Media, MediaBody, MediaFigure, Block} from '../../Layouts'
import {Button} from '../../UI'
import {prefix} from '../../config'

const AskQuestionSide = () => {
  return (
    <aside className={styles.AskQuestionSide}>
      <Media alignItems="center">
        <MediaFigure n={2}>
          <img src={`${prefix}/images/jen.jpg`} className={styles.AskQuestionSide__image} />
        </MediaFigure>

        <MediaBody>
          <Block n={1.5}>
            <h1 className={styles.AskQuestionSide__title}>Jennifer Potter</h1>
            <div className={styles.AskQuestionSide__text}>Our vaccine specialist will be glad to assist you</div>
          </Block>

          <Button linkTo={`${prefix}/questions`}>Ask a Question</Button>
        </MediaBody>
      </Media>
    </aside>
  )
}

export default AskQuestionSide
