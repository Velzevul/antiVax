import React from 'react';

import styles from './Root.css';
import layouts from '../../styles/layouts.css';

import Header from '../Header';
import MainNav from '../MainNav';
import Footer from '../Footer';

const Root = ({
  children
}) => {
  return (
    <div className={`${layouts.page} ${styles.Root}`}>
      <Header />
      <MainNav />

      <main className={layouts.page__content}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Root;
