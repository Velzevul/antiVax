import { combineReducers } from 'redux';
import sections from './Static/staticReducer';
import entities from './App/appReducer';

const rootReducer = combineReducers({
  sections,
  entities
});

export default rootReducer;
