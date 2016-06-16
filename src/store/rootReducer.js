import { combineReducers } from 'redux'
import sections from './sectionsReducer'
import search from './searchReducer'

const rootReducer = combineReducers({
  sections,
  search
})

export default rootReducer
