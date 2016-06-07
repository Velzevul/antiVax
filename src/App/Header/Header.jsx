import React from 'react';

import styles from './Header.css';
import layouts from '../../layouts.css';

import MainNav from '../MainNav';


const Header = ({
  location
}) => {
  return (
    <header className={styles.Bg}>
      <div className={styles.Bg__body}>
        <div className={styles.Header}>
          <div className={layouts.wrapM}>
            <div className={layouts.grid}>
              <div className={layouts.grid__item_1_5}>
                <img src='/images/logo.svg'
                     alt='Vaccination Information Center'
                     className={styles.Header__logo}/>
              </div>

              <div className={layouts.grid__item}>
                <div className={layouts.block}>
                  <h1 className={styles.Header__title}>Vaccination<br/>Information Center</h1>
                </div>

                <h2 className={styles.Header__subtitle}>All the information about vaccines and vaccination in Manitoba</h2>
              </div>
            </div>
          </div>
        </div>

        <MainNav location={location} />
      </div>
    </header>
  );
};

export default Header;
