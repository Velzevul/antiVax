import React from 'react';

import styles from './Header.css';
import layouts from '../../styles/layouts.css';

import HeaderContact from '../HeaderContact';
import Sitename from '../Sitename';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={layouts.wrapM}>
        <div className={layouts.justified}>
          <div className={layouts.justified__item}>
            <Sitename />
          </div>

          <div className={layouts.justified__item}>
            <HeaderContact />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
