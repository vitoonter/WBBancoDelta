import * as types from './actionTypes'
import { CALL_API, Schemas } from '../middleware/api'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

// Hace un request a la api de github
function fetchUser(username) {
  return {
    [CALL_API]: {
      types: [ LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE ],
      endpoint: `logginUsername`,
      schema: Schemas.USER,
      body: JSON.stringify({
        username: username,
      })
    }
  }
}

export function login(username) {
  return (dispatch) => {
    return dispatch(fetchUser(username))
  }
}

const showMenu = () => {
  return {type: types.SHOW_MENU}
}

export default showMenu;
