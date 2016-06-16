import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Spinner from '../../Spinner';
import {fetchSection} from '../../store/sectionsActions';
import styles from './StaticSection.css';
import layouts from '../../styles/layouts.css';
import typography from '../../styles/typography.css';
import ui from '../../styles/ui.css';

class StaticSection extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props,
          {sectionId} = this.props.params;

    dispatch(fetchSection(sectionId))
      .then( () => { console.log('section loaded!'); });
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch, pages} = nextProps,
          {sectionId, pageId} = nextProps.params;

    if (sectionId !== this.props.params.sectionId) {
      dispatch(fetchSection(sectionId));
    }

    if ((pageId === undefined) && (pages.length > 0)) {
      browserHistory.push(`/${sectionId}/${pages[0].id}`);
    }
  }

  render() {
    const {isFetching, pages, children, sectionTitle, dispatch} = this.props,
          {sectionId} = this.props.params;

    let content = '';

    if (isFetching) {
      return (
        <Spinner />
      );
    } else {
      return (
        <div className={`${layouts.wrap} ${styles.StaticSection}`}>
          <div className={styles.StaticSection__sidebar}>
            <div className={styles.SidebarMenu}>
              <div className={layouts.block2}>
                <div className={styles.SidebarMenu__title}>
                  <h3 className={typography.hSecondary}>{sectionTitle}</h3>
                </div>
              </div>


              {pages.map( page =>
                <Link to={`/${sectionId}/${page.id}`}
                      key={page.id}
                      activeClassName={styles.SidebarMenu__item_active}
                      className={styles.SidebarMenu__item}>{page.title}</Link>
              )}
            </div>
          </div>

          <div className={styles.StaticSection__body}>
            {children}
          </div>
        </div>
      );
    }
  }
}

export default connect(
  (state, ownProps) => {
    const {sectionId} = ownProps.params,
          section = state.sections[sectionId];

    return {
      isFetching: section ? section.isFetching : true,
      pages: section ? section.pages : [],
      sectionTitle: section ? section.title : ''
    };
  }
)(StaticSection);
