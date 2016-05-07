import React from 'react';

import styles from './Sitename.css';
import layouts from '../../styles/layouts.css';

const sitename = {
  title: 'Title',
  subtitle: 'Subtitle'
};

const Sitename = () => {
  return (
    <div className={styles.Sitename}>
      <div className={layouts.media}>
        <div className={layouts.media__figure}>
          <img className={styles.Sitename__logo} src="//placehold.it/50x50" alt="Logo"/>
        </div>

        <div className={layouts.media__body}>
          <div className={layouts.blockS}>
            <h1 className={styles.Sitename__title}>{sitename.title}</h1>
          </div>

          <div className={styles.Sitename__subtitle}>{sitename.subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Sitename;
