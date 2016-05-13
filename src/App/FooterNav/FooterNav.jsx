import React from 'react';
import {Link} from 'react-router';

import styles from './FooterNav.css';
import layouts from '../../layouts.css';

const FooterNav = ({
  items,
  title
}) => {
  return (
    <div className={styles.FooterNav}>
      <div className={layouts.block}>
        <div className={styles.FooterNav__title}>{title}</div>
      </div>

      <ul className={layouts.list}>
        {items.map((item) =>
          <li className={layouts.list__item} key={item.path}>
            <Link to={item.path} className={styles.FooterNav__item}>{item.label}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FooterNav;
