import { CALL_API, Schemas } from '../middleware/api'

export const USER_INFO_REQUEST = 'USER_INFO_REQUEST'
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS'
export const USER_INFO_FAILURE = 'USER_INFO_FAILURE'

// Hace un request a la api de github
function fetchUserData(username) {
  return {
    [CALL_API]: {
      types: [ USER_INFO_REQUEST, USER_INFO_SUCCESS, USER_INFO_FAILURE ],
      endpoint: `fetchUserInfo?username=${username}`,
      schema: Schemas.USER,
      method: 'GET',
    }
  }
}

export function fetchUserNames(username) {
  return (dispatch) => {
    return dispatch(fetchUserData(username))
  }
}

export default fetchUserNames;
