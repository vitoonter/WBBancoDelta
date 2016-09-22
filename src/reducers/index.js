import { combineReducers } from 'redux';
import sessionReducer from './session';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing, sessionReducer
})

export default rootReducer;
