import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import question from './questionsReducer'
import articles from './articleReducer'
import schedule from './scheduleReducer'
import search from './searchReducer'
import user from './usersReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  question,
  articles,
  schedule,
  search,
  user
})

export default rootReducer
