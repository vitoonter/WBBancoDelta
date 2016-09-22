import { CALL_API, Schemas } from '../middleware/api'

export const GITHUB_REQUEST = 'GITHUB_REQUEST'
export const GITHUB_SUCCESS = 'GITHUB_SUCCESS'
export const GITHUB_FAILURE = 'GITHUB_FAILURE'

// Hace un request a la api de github
function fetchUser() {
  return {
    [CALL_API]: {
      types: [ GITHUB_REQUEST, GITHUB_SUCCESS, GITHUB_FAILURE ],
      endpoint: `users/mvarela92`,
      schema: Schemas.USER
    }
  }
}

export function loadGitHub() {
  return (dispatch) => {
    return dispatch(fetchUser())
  }
}