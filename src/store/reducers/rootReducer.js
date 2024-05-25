import {combineReducers} from 'redux'
import clientReducer from './client'
import scoreReducer from './score'

const appReducer = combineReducers({
  client: clientReducer,
  score: scoreReducer,
  })

const rootReducer = (state, action) => {
      return appReducer(state, action)
}

export default rootReducer

