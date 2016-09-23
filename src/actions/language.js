import * as types from './actionTypes'

const changeLanguage = (language) => {
  return {
    type: types.CHANGE_LANGUAGE,
    language: language
  }
}

export default changeLanguage;
