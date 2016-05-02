import React from 'react';

import {header} from './Header.css';
import {lBlock} from '../../layouts.css';

const Header = (props) => {
  return (
    <div className={lBlock}>
      <h1 className={header}>{props.title}</h1>
    </div>
  );
};

export default Header;
