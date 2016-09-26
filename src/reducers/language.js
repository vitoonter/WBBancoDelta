import { CHANGE_LANGUAGE } from '../actions/actionTypes';

const language = (state = "es", action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.language;
    default:
      return state;
  }
}

export default language;
