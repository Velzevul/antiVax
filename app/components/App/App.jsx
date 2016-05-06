import React from 'react';

import {app} from './App.css';

import Header from '../Header';
import MainNav from '../MainNav';

const App = () => {
  return (
    <div className={app}>
      <Header title={'test'}/>
      <MainNav />
    </div>
  );
};

export default App;
