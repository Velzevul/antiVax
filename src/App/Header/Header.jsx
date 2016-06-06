import React from 'react';

import styles from './Header.css';

import Sitename from '../Sitename';
import MainNav from '../MainNav';


const Header = ({
  location
}) => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__body}>
        <Sitename />
        
        <MainNav location={location} />
      </div>
    </header>
  );
};

export default Header;
