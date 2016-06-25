import React from 'react'
import {Link} from 'react-router'
import {animateScroll} from 'react-scroll'

import {Article} from '../../Common'
import styles from './StaticItem.css'
import {prefix} from '../../config'

class StaticItem extends React.Component {
  componentDidMount () {
    const {item, params} = this.props
    const isActive = params.itemId === item.id

    if (isActive) {
      animateScroll.scrollTo(this._element.offsetTop - 100, {
        duration: 500
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const {item, params} = nextProps
    const isActive = params.itemId === item.id

    if (isActive) {
      animateScroll.scrollTo(this._element.offsetTop - 100, {
        duration: 500
      })
    }
  }

  render () {
    const {item, params} = this.props
    const {sectionId, pageId} = params

    return (
      <div ref={el => { this._element = el }} className={styles.StaticItem}>
        <Link to={`${prefix}/${sectionId}/${pageId}`}
          style={{backgroundImage: `url('${prefix}/images/close.svg')`}}
          className={styles.StaticItem__backlink}>back</Link>

        <Article article={item} />
      </div>
    )
  }
}

export default StaticItem
