import React from 'react'
import {Link} from 'react-router'
import {animateScroll} from 'react-scroll'

import styles from './Faq.css'
import layouts from '../../styles/layouts.css'
import typography from '../../styles/typography.css'

class Faq extends React.Component {
  componentDidMount () {
    const {faq, params} = this.props
    const isActive = params.itemId === faq.id

    if (isActive) {
      animateScroll.scrollTo(this._element.offsetTop, {
        duration: 500
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const {faq, params} = nextProps
    const isActive = params.itemId === faq.id

    if (isActive) {
      animateScroll.scrollTo(this._element.offsetTop, {
        duration: 500
      })
    }
  }

  render () {
    const {faq, params, fullText} = this.props
    const isActive = params.itemId === faq.id

    let content = ''
    let header = ''
    let faqStyles = [styles.Faq]

    if (isActive) {
      faqStyles.push(styles.Faq_full)

      header = (
        <Link to="/questions" className={`${typography.hTertiary} ${styles.Faq__title} ${styles.Faq__title_active}`}>{faq.title}</Link>
      )

      content = (
        <div className={typography.content} dangerouslySetInnerHTML={{__html: fullText}}></div>
      )
    } else {
      faqStyles.push(styles.Faq_preview)

      header = (
        <Link to={`/questions/${faq.id}`} className={`${typography.hTertiary} ${styles.Faq__title}`}>{faq.title}</Link>
      )

      content = (
        <div className={typography.text} dangerouslySetInnerHTML={{__html: faq.preview}}></div>
      )
    }

    return (
      <div className={faqStyles.join(' ')} ref={e => { this._element = e }}>
        <div className={layouts.block1}>
          {header}
        </div>

        <div className={styles.Faq__body}>
          {content}
        </div>
      </div>
    )
  }
}

export default Faq
