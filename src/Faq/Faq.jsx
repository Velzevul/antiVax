import React from 'react';

import styles from './Faq.css';
import layouts from '../layouts.css';

import FaqSearch from './FaqSearch';
import FaqList from './FaqList';

const Faq = () => {
  return (
    <div className={layouts.wrapM}>
      <div className={styles.Faq}>
        <div className={layouts.blockL}>
          <div className={`${layouts.grid} ${layouts.grid_center}`}>
            <div className={`${layouts.grid__item_3_4} ${layouts.grid__item}`}>
              <FaqSearch />
            </div>
          </div>
        </div>

        <FaqList />
      </div>
    </div>
  );
};

export default Faq;
