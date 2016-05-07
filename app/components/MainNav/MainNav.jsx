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
    path: '/vaccines'
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

const MainNav = () => {
  return (
    <div className={styles.MainNav}>
      <div className={layouts.wrapM}>
        <ul className={layouts.listInline}>
          {navItems.map(item =>
            <li className={layouts.listInline__item} key={item.path}>
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
