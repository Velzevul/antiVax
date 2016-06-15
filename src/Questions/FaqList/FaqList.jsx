import React from 'react';
import {connect} from 'react-redux';

import {fetchSection} from '../../store/sectionsActions';
import Spinner from '../../Spinner';
import Faq from '../Faq';
import styles from './FaqList.css';
import layouts from '../../styles/layouts.css';
import states from '../../styles/states.css';
import typography from '../../styles/typography.css';
import ui from '../../styles/ui.css';


class FaqList extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props;

    dispatch(fetchSection('questions'));
  }

  render() {
    const {isFetching, faqs} = this.props;

    let content = '';

    if (isFetching) {
      content = (
        <Spinner />
      );
    } else {
      content = (
        <div>
          {faqs.map( f =>
            <Faq key={f.id}
                 faq={f}
                 params={this.props.params} />
          )}
        </div>
      );
    }

    return (
      <div className={styles.FaqList}>
        {content}
      </div>
    )
  }
}

export default connect(
  (state) => {
    const faqSection = state.sections.questions;

    return {
      isFetching: faqSection ? faqSection.isFetching : false,
      faqs: faqSection ? faqSection.pages : []
    };
  }
)(FaqList);

