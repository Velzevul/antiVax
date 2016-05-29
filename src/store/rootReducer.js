import { combineReducers } from 'redux';
import sections from './sectionsReducer';
import pages from './pagesReducer';
import search from './searchReducer';


const rootReducer = combineReducers({
  sections,
  pages,
  search
});

export default rootReducer;
