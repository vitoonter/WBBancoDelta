import { combineReducers } from 'redux'
import menuReducer from './menu'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  routing, menuReducer
})

export default rootReducer