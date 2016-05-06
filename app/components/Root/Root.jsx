import React from 'react';

import styles from './Root.css';

import Header from '../Header';
import MainNav from '../MainNav';

const Root = (props) => {
  return (
    <div>
      <Header title={'test'}/>
      <MainNav />

      <main>
        {props.children}
      </main>
    </div>
  );
};

export default Root;
