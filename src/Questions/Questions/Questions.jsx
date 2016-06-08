import React from 'react';

import QuestionsSearch from '../QuestionsSearch';
import FaqList from '../FaqList';
import SearchResultsList from '../SearchResultsList';

import styles from './Questions.css';
import layouts from '../../layouts.css';


const Questions = ({
  children,
  params,
  location
}) => {
  return (
    <div className={layouts.wrapM}>
      <div className={styles.Questions}>
        <div className={layouts.blockL}>
          <div className={`${layouts.grid} ${layouts.grid_center}`}>
            <div className={layouts.grid__item_2_3}>
              <div className={layouts.block}>
                <h1 className={styles.Questions__title}>What do you want to know about vaccines?</h1>
              </div>

              <QuestionsSearch location={location} />
            </div>
          </div>
        </div>

        <div className={`${layouts.grid} ${layouts.grid_center}`}>
          <div className={layouts.grid__item_2_3}>
            {location.query.q ?
              <SearchResultsList location={location} /> :
              <FaqList params={params} location={location}>{children}</FaqList>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
