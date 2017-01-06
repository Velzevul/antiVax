import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import question from './questionsReducer'
import articles from './articleReducer'
import search from './searchReducer'
import user from './usersReducer'
import sections from './sectionsReducer'
import ui from './uiReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  question,
  articles,
  search,
  user,
  sections,
  ui
})

export default rootReducer
