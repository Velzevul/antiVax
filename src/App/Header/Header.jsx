import React from 'react';

import MainNav from '../MainNav';
import styles from './Header.css';
import layouts from '../../styles/layouts.css';


const Header = ({
  location
}) => {
  return (
    <header>
      <div className={styles.Cover}>
        <div className={styles.Cover__body}>
          <div className={styles.Bg}>
            <div className={`${layouts.wrap} ${styles.Wrap}`}>
              <div className={layouts.grid}>
                <div className={layouts.grid__cell_2_10}>
                  <img src='/images/logo.svg'
                       alt='Vaccination Information Center'
                       className={styles.Logo}/>
                </div>

                <div className={layouts.grid__item}>
                  <div className={layouts.block1}>
                    <h1 className={styles.Title}>Vaccination<br/>Information Center</h1>
                  </div>

                  <h2 className={styles.Subtitle}>All the information about vaccines and vaccination in Manitoba</h2>
                </div>
              </div>
            </div>

            <MainNav location={location} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
