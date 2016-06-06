import React from 'react';

import styles from './Sitename.css';
import layouts from '../../layouts.css';


const CONTENT = {
  title: 'Vaccination<br>Information Center',
  subtitle: 'All the information about vaccines and vaccination in Manitoba',
  logoUrl: '/images/logo.svg'
};

const Sitename = () => {
  return (
    <div className={styles.Sitename}>
      <div className={layouts.wrapM}>
        <div className={layouts.grid}>
          <div className={layouts.grid__item_1_5}>
            <img src={CONTENT.logoUrl} alt={CONTENT.title} className={styles.Sitename__logo}/>
          </div>

          <div className={layouts.grid__item}>
            <div className={layouts.block}>
              <h1 className={styles.Sitename__title} dangerouslySetInnerHTML={{__html: CONTENT.title}}></h1>
            </div>

            <h2 className={styles.Sitename__subtitle} dangerouslySetInnerHTML={{__html: CONTENT.subtitle}}></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitename;
