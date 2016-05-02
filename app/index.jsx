import './global.css';
import {lBlock} from './layouts.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

console.log('hi');

ReactDOM.render(<App className={lBlock} />, document.getElementById('app'));
