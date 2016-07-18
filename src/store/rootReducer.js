import { combineReducers } from 'redux'
import auth from './authReducer'
import flash from './flashReducer'
import question from './questionsReducer'
import articles from './articleReducer'
import schedule from './scheduleReducer'
import search from './searchReducer'

const rootReducer = combineReducers({
  auth,
  flash,
  question,
  articles,
  schedule,
  search
})

export default rootReducer
