import * as types from './actionTypes'
import { CALL_API, Schemas } from '../middleware/api'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export const LOGIN_PASSWORD_REQUEST = 'LOGIN_PASSWORD_REQUEST'
export const LOGIN_PASSWORD_SUCCESS = 'LOGIN_PASSWORD_SUCCESS'
export const LOGIN_PASSWORD_FAILURE = 'LOGIN_PASSWORD_FAILURE'

// Hace un request a la api de github
function fetchUser(username) {
  return {
    [CALL_API]: {
      types: [ LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE ],
      endpoint: `logginUsername`,
      schema: Schemas.USER,
      method: 'POST',
      body: JSON.stringify({
        username: username,
      })
    }
  }
}
function fetchLogin(username, password) {
  return {
    [CALL_API]: {
      types: [ LOGIN_PASSWORD_REQUEST, LOGIN_PASSWORD_SUCCESS, LOGIN_PASSWORD_FAILURE ],
      endpoint: `logginPassword`,
      schema: Schemas.USER,
      body: JSON.stringify({
        username: username,
        password:password
      })
    }
  }
}

export function login(username) {
  return (dispatch) => {
    return dispatch(fetchUser(username))
  }
}

export function loginPassword(username, password){
  return(dispatch) =>{
    return dispatch(fetchLogin(username, password))
  }
}

const showMenu = () => {
  return {type: types.SHOW_MENU}
}

export default showMenu;
