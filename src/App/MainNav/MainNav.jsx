import React from 'react';
import {Link} from 'react-router';

import styles from './MainNav.css';
import layouts from '../../styles/layouts.css';


const navItems = [
  {
    label: 'Ask a Question',
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
          'questions': styles.Indicator_0,
          'about-vaccines': styles.Indicator_1,
          'safety': styles.Indicator_2,
          'schedule': styles.Indicator_3,
          'blog': styles.Indicator_4
        },
        currentSection = location.pathname.split('/')[1];

  return (
    <div className={styles.Bg}>
      <div className={`${layouts.wrap} ${styles.Wrap}`}>
        <div className={`${styles.Indicator} ${routeStateMap[currentSection]}`}></div>

        <ul className={layouts.grid}>
          {navItems.map(item =>
            <li className={`${layouts.grid__item}`} key={item.path}>
              <Link to={item.path} className={styles.Item}
                    activeClassName={styles.Item_active}>{item.label}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
