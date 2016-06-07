import React from 'react';

import styles from './App.css';
import layouts from '../layouts.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = ({
  children,
  location
}) => {
  return (
    <div className={layouts.page}>
      <Header location={location} />

      <main className={layouts.page__content}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default App;
