import React from 'react';

import Header from './Header';
import Footer from './Footer';

import styles from './App.css';


const App = ({
  children,
  location
}) => {
  return (
    <div className={styles.App}>
      <Header location={location} />

      <main className={styles.App__content}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default App;
