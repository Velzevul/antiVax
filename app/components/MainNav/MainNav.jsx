import React from 'react';

import styles from './MainNav.css';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          label: "Ask a question",
          link: "/ask"
        },
        {
          label: "About Vaccines",
          link: "/about-vaccines"
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
            <a href={item.link} className={styles.nav__link}>{item.label}</a>
          </li>
        )}
      </ul>
    );
  }
}

export default MainNav;
