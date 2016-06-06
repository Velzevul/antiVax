import React from 'react';

import styles from './App.css';
import layouts from '../layouts.css';

import Header from './Header';
import Footer from './Footer';

const App = ({
  children,
  location
}) => {
  return (
    <div className={`${layouts.page} ${styles.Root}`}>
      <Header location={location} />

      <main className={layouts.page__content}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default App;
