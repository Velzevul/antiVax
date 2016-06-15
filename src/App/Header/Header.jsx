import React from 'react';

import MainNav from '../MainNav';
import SearchBar from '../SearchBar';
import styles from './Header.css';
import layouts from '../../styles/layouts.css';


const Header = ({
  location
}) => {
  return (
    <header>
      <div className={styles.CoverImg}>
        <div className={styles.CoverImg__body}>
          <div className={`${layouts.wrap} ${styles.Header}`}>
            <div className={`${layouts.grid} ${layouts.grid_v_mid}`}>
              <div className={`${layouts.grid__item} ${layouts._2_10}`}>
                <img src='/images/logo.svg'
                     alt='Vaccination Information Center'
                     className={styles.Header__logo}/>
              </div>

              <div>
                <div className={layouts.block2}>
                  <div className={layouts.block}>
                    <h1 className={styles.Header__title}>Vaccination Information Center</h1>
                  </div>

                  <h2 className={styles.Header__subtitle}>All the information you need to know about vaccines and vaccination in Manitoba</h2>
                </div>

                <SearchBar location={location} />
              </div>
            </div>

          </div>

          <MainNav location={location} />
        </div>
      </div>
    </header>
  );
};

export default Header;
