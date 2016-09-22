import { SHOW_MENU } from '../actions/actionTypes';

const initialState = {
  isVisibleMenu: false
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return (state.isVisibleMenu) ? { isVisibleMenu: false } : { isVisibleMenu: true };
    default:
      return state;
  }
}

export default menuReducer;