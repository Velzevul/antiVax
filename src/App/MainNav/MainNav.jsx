import React from 'react';
import {Link} from 'react-router';

import styles from './MainNav.css';
import layouts from '../../styles/layouts.css';


const navItems = [
  {
    label: 'Questions & Answers',
    path: '/questions'
  },
  {
    label: 'About Vaccines',
    path: '/about-vaccines'
  },
  {
    label: 'Vaccine Safety',
    path: '/safety'
  },
  {
    label: 'Vaccination Schedule',
    path: '/schedule'
  },
  {
    label: 'Blog',
    path: '/blog'
  }
];

const MainNav = ({
  location
}) => {
  const routeStateMap = {
          'questions': styles.MainNav__indicator_0,
          'about-vaccines': styles.MainNav__indicator_1,
          'safety': styles.MainNav__indicator_2,
          'schedule': styles.MainNav__indicator_3,
          'blog': styles.MainNav__indicator_4
        },
        currentSection = location.pathname.split('/')[1];

  return (
    <div className={styles.Bg}>
      <div className={`${layouts.wrap} ${styles.MainNav}`}>
        <div className={`${styles.MainNav__indicator} ${routeStateMap[currentSection]}`}></div>

        <ul className={layouts.grid}>
          {navItems.map(item =>
            <li className={`${layouts.grid__item}`} key={item.path}>
              <Link to={item.path} className={styles.MainNav__item}
                    activeClassName={styles.MainNav__item_active}>{item.label}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
