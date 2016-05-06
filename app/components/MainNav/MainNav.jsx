import React from 'react';
import {Link} from 'react-router';

import styles from './MainNav.css';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          label: "Ask a question",
          link: "/questions"
        },
        {
          label: "About Vaccines",
          link: "/vaccines"
        },
        {
          label: "Vaccine Safety",
          link: "/vaccine-safety"
        }
      ]
    };
  }
  
  render() {
    const navItems = this.state.navItems;

    return (
      <ul className={styles.nav}>
        {navItems.map(item =>
          <li className={styles.nav__item}>
            <Link to={item.link} className={styles.nav__link} activeClassName={styles.nav__link_active}>{item.label}</Link>
          </li>
        )}
      </ul>
    );
  }
}

export default MainNav;
