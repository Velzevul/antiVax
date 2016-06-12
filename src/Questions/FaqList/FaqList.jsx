import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchSection} from '../../store/sectionsActions';
import FaqPreview from '../FaqPreview';
import styles from './FaqList.css';
import layouts from '../../styles/layouts.css';
import states from '../../styles/states.css';
import typography from '../../styles/typography.css';
import ui from '../../styles/ui.css';


class FaqList extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props;

    dispatch(fetchSection('faqs'));
  }

  render() {
    const {isFetching, faqs, children} = this.props,
          {query} = this.props.location,
          {itemId} = this.props.params,
          showAll = query.show === 'all';

    let content = [];

    if (isFetching) {
      content = (
        <div>loading...</div>
      );
    } else {
      const visibleFaqs = faqs.filter( f => f.isFrequent || showAll );

      content = visibleFaqs.map(f => {
        return (
          <div className={`${layouts.wrap} ${styles.Preview}`} key={f.id}>
            <FaqPreview query={query} faq={f}/>
            { f.id === itemId ?
              <div className={`${layouts.wrap} ${styles.Item}`} key={f.id}>
                {children}
              </div> :
              null
            }
          </div>
        );
      });

      if (!showAll) {
        content = (
          <div className={layouts.block2}>
            {content}
          </div>
        );
      }
    }

    return (
      <div>
        <div className={layouts.block1}>
          <div className={states.aligned_mid}>
            <h2 className={typography.hSecondary}>Frequently Asked</h2>
          </div>
        </div>

        {content}

        { showAll ? null :
          <div className={states.aligned_mid}>
            <Link className={ui.button} to={{ pathname: '/questions', query: { show: 'all'} }}>Show More</Link>
          </div>
        }
      </div>
    );
  }
}

export default connect(
  (state) => {
    const faqSection = state.sections.faqs;

    return {
      isFetching: faqSection ? faqSection.isFetching : false,
      faqs: faqSection ? faqSection.pages : []
    };
  }
)(FaqList);

