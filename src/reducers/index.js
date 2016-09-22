import { combineReducers } from 'redux'
import menuReducer from './menu'
import { routerReducer as routing } from 'react-router-redux'
import merge from 'lodash/merge'

// Guarda una entidad obtenida de la api (response.entities) en el state (caso github), 
// hay que ver como lo manda el back de banco delta
function entities(state = { users: {} }, action) {
	if (action.response && action.response.entities) {
		return merge({}, state, action.response.entities)
	}
	return state
}

// este reducer se encarga de manejar el estado de los request
function fetch(state = { isFetching: false, error: null }, action) {

    switch (action.type) {
      case 'FETCH_REQUEST':
        return merge({}, state, {
          isFetching: true,
          lastEndpoint: action.endpoint
        })
      case 'FETCH_RESPONSE':
        return merge({}, state, {
          isFetching: false,
          lastEndpoint: action.endpoint
        })
      case 'FETCH_FALIURE':
        return merge({}, state, {
          isFetching: false,
          lastEndpoint: action.endpoint,
          error: action.error
        })
      default:
        return state
    }
}

const rootReducer = combineReducers({
  routing,
  entities,
  fetch,
  menuReducer
})

export default rootReducer