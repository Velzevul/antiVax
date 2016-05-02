import React from 'react';

import {app, greeting} from './App.css';
import {lBlock} from '../../layouts.css';

import Header from '../Header';

const App = () => {
  return (
    <div className={`${app} ${lBlock}`}>
      <Header title={'test'}/>
    </div>
  );
};

export default App;
