import { combineReducers } from 'redux'
import sections from './sectionsReducer'
import search from './searchReducer'
import schedule from './scheduleReducer'

const rootReducer = combineReducers({
  sections,
  search,
  schedule
})

export default rootReducer
