import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

    dispatch(fetchSection('faqs'));
  }

  render() {
    const {isFetching, faqs, children} = this.props;

    console.log(faqs);

    if (isFetching) {
      return (
        <Spinner />
      );
    } else {
      return (
        <div>
          {faqs.map( (f,i) =>
            <Faq key={f.id}
                 faq={f}
                 index={i}
                 name={`Faq${f.id}`}
                 params={this.props.params}>{children}</Faq>
          )}
        </div>
      );
    }
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

