import { combineReducers } from 'redux';
import sections from './sectionsReducer';
import pages from './pagesReducer';


const rootReducer = combineReducers({
  sections,
  pages
});

export default rootReducer;
