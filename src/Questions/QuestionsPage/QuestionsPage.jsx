import React from 'react';

import FaqList from '../FaqList';
import SearchResultsList from '../SearchResultsList';
import Contact from '../Contact';
import Search from '../Search';
import styles from './QuestionsPage.css';
import layouts from '../../styles/layouts.css';


const QuestionsPage = ({
  children,
  params,
  location
}) => {
  return (
    <div className={`${layouts.wrap} ${styles.Wrap}`}>
      <div className={layouts.block6}>
        <Search location={location} />
      </div>

      <div className={layouts.block8}>
        {location.query.q ?
          <SearchResultsList location={location} /> :
          <FaqList params={params} location={location}>{children}</FaqList>
        }
      </div>

      <Contact />
    </div>
  );
};

export default QuestionsPage;
