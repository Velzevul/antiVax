import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchSection} from '../store/sectionsActions';


const getVisibleFaqs = (faqs, show) => {
  switch (show) {
    case 'all':
      return faqs;
    default:
      return faqs.filter( f => f.isFrequent );
  }
};

class FaqList extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props;

    dispatch(fetchSection('faqs'));
  }

  render() {
    const {isFetching, faqs, children} = this.props,
          {query} = this.props.location,
          {itemId} = this.props.params;

    if (isFetching) {
      return (
        <div>loading...</div>
      );
    } else {
      const visibleFaqs = getVisibleFaqs(faqs, query.show);

      return (
        <div>
          <ul>
            { visibleFaqs.map( f =>
              <li key={f.id}>
                { f.id === itemId ?
                  children :
                  <Link to={{pathname: `/questions/${f.id}`, query: {show: query.show}}}>{f.title}</Link>
                }
              </li>
            ) }
          </ul>

          { query.show !== 'all' ?
            <Link to={{ pathname: '/questions', query: { show: 'all'} }}>See all</Link> :
            null
          }
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

