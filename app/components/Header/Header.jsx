import React from 'react';

import styles from './Header.css';

import HeaderContact from '../HeaderContact';
import HeaderSitename from '../HeaderSitename';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__section}>
        <HeaderSitename />
      </div>

      <div className={styles.header__section}>
        <HeaderContact />
      </div>
    </div>
  );
};

export default Header;
