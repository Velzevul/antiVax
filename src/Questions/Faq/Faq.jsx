import React from 'react';
import {Link} from 'react-router';
import {animateScroll} from 'react-scroll';
import {connect} from 'react-redux';

import {fetchPage} from '../../store/pagesActions';
import Spinner from '../../Spinner';
import styles from './Faq.css';
import layouts from '../../styles/layouts.css';
import states from '../../styles/states.css';
import typography from '../../styles/typography.css';
import ui from '../../styles/ui.css';


class Faq extends React.Component {
  componentDidMount() {
    const {faq,  params, dispatch} = this.props,
          isActive = params.itemId === faq.id;

    if (isActive) {
      dispatch(fetchPage(faq.id));
      animateScroll.scrollTo(this._element.offsetTop, {
        duration: 500
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {faq,  params, dispatch} = nextProps,
          isActive = params.itemId === faq.id;

    if (params.itemId !== this.props.params.itemId) {
      dispatch(fetchPage(faq.id));
    }

    if (isActive) {
      animateScroll.scrollTo(this._element.offsetTop, {
        duration: 500
      });
    }
  }

  render() {
    const {faq,  params, isFetching, fullText} = this.props,
          isActive = params.itemId === faq.id;

    let content = '',
        header = '',
        faqStyles = [styles.Faq];

    if (isActive) {
      faqStyles.push(styles.Faq_active);

      header = (
        <Link to='/questions' className={`${typography.hTertiary} ${styles.Faq__title} ${styles.Faq__title_active}`}>{faq.title}</Link>
      );

      if (isFetching) {
        faqStyles.push(styles.Faq_loading);

        content = (
          <Spinner />
        );
      } else {
        faqStyles.push(styles.Faq_full);

        content = (
          <div className={typography.content} dangerouslySetInnerHTML={{__html: fullText}}></div>
        );
      }
    } else {
      faqStyles.push(styles.Faq_preview);

      header = (
        <Link to={`/questions/${faq.id}`} className={`${typography.hTertiary} ${styles.Faq__title}`}>{faq.title}</Link>
      );

      content =  (
        <div className={typography.text} dangerouslySetInnerHTML={{__html: faq.preview}}></div>
      );
    }

    return (
      <div className={faqStyles.join(' ')} ref={e => this._element = e}>
        <div className={layouts.block1}>
          {header}
        </div>

        <div className={styles.Faq__body}>
          {content}
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => {
    const {itemId} = ownProps.params,
          item = state.pages[itemId];

    return {
      isFetching: item ? item.isFetching : true,
      fullText: item ? item.content : ''
    };
  }
)(Faq);

