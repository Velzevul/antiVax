import React from 'react'
import {Link} from 'react-router'
import {animateScroll} from 'react-scroll'

// import styles from './StaticItem.css'
import typography from '../../styles/typography.css'

class StaticItem extends React.Component {
  componentDidMount () {
    const {item, params} = this.props
    const isActive = params.itemId === item.id

    if (isActive) {
      animateScroll.scrollTo(this._element.offsetTop, {
        duration: 500
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const {item, params} = nextProps
    const isActive = params.itemId === item.id

    if (isActive) {
      animateScroll.scrollTo(this._element.offsetTop, {
        duration: 500
      })
    }
  }

  render () {
    const {item, params} = this.props
    const {sectionId, pageId, itemId} = params

    if (itemId === item.id) {
      return (
        <div ref={el => (this._element = el)}>
          <div>{item.title}</div>
          <Link to={`/${sectionId}/${pageId}`}>&lt;Back</Link>
          <div className={typography.content} dangerouslySetInnerHTML={{__html: item.content}}></div>
        </div>
      )
    } else {
      return (
        <div ref={el => (this._element = el)}>
          <Link to={`/${sectionId}/${pageId}/${item.id}`}>{item.title}</Link>
        </div>
      )
    }
  }
}

export default StaticItem
