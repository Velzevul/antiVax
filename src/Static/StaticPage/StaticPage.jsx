import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'

import {fetchPage} from '../../store/pagesActions';
import Spinner from '../../Spinner';
import styles from './StaticPage.css';
import typography from '../../styles/typography.css';


class StaticPage extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props,
          {pageId} = this.props.params;

    dispatch(fetchPage(pageId));
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch} = nextProps,
          {pageId} = nextProps.params;

    if (pageId !== this.props.params.pageId) {
      dispatch(fetchPage(pageId));
    }
  }

  render() {
    const {isFetching, title, content, items, children} = this.props,
          {sectionId, pageId, itemId} = this.props.params;

    if (isFetching) {
      return (
        <Spinner />
      )
    } else {
      return (
        <div className={typography.content}>
          <h1>{title}</h1>

          <div dangerouslySetInnerHTML={{__html: content}}></div>
          {items ?
            <div>
              <ul>
                {items.map( i =>
                  <li key={i.id}>
                    <div>
                      { i.id === itemId ?
                        children :
                        <Link to={`/${sectionId}/${pageId}/${i.id}`} key={i.id} activeClassName="test">{i.title}</Link>
                      }
                    </div>
                  </li>
                )}
              </ul>
            </div> :
            null
          }
        </div>
      );
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {pageId} = ownProps.params,
          page = state.pages[pageId];

    return {
      isFetching: page ? page.isFetching : true,
      title: page ? page.title : '',
      content: page ? page.content : '',
      items: page ? page.items : null
    };
  }
)(StaticPage);
