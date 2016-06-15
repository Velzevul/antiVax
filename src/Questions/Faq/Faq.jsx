import React from 'react';
import {Link} from 'react-router';

import styles from './Faq.css';
import layouts from '../../styles/layouts.css';
import states from '../../styles/states.css';
import typography from '../../styles/typography.css';
import ui from '../../styles/ui.css';


class Faq extends React.Component {
  componentDidMount() {
    const {params, faq, index} = this.props,
          isOpen = params.itemId === faq.id;

    if (isOpen) {
      animateScroll.scrollTo(this._element.offsetTop);
    }
  }

  componentDidUpdate() {
    const {params, faq, index} = this.props,
      isOpen = params.itemId === faq.id;

    if (isOpen) {
      animateScroll.scrollTo(this._element.offsetTop);
    }
  }

  render() {
    const {faq,  params, children, index} = this.props,
          isOpen = params.itemId === faq.id;

    if (isOpen) {
      return (
        <div className={styles.Faq} ref={e => this._element = e}>
          <div className={layouts.block1}>
            <Link to='/questions' className={`${typography.hTertiary} ${styles.Faq__title}`}>{faq.title}</Link>
          </div>

          <div className={`${styles.Faq__body} ${styles.Faq__body_open}`}>
            {children}
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.Faq} ref={e => this._element = e}>
          <div className={layouts.block1}>
            <Link to={`/questions/${faq.id}`} className={`${typography.hTertiary} ${styles.Faq__title}`}>{faq.title}</Link>
          </div>

          <div className={styles.Faq__body}>
            <div className={typography.text} dangerouslySetInnerHTML={{__html: faq.preview}}></div>
          </div>
        </div>
      );
    }
  }
}

export default Faq;
