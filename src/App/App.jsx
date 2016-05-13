import React from 'react';

import styles from './App.css';
import layouts from '../layouts.css';

import Header from './Header';
import MainNav from './MainNav';
import Footer from './Footer';

const App = ({
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

export default App;
