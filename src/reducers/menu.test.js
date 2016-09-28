import menu from './menu';
import showMenu from '../actions/index';

describe('Menu reducer', () => {
  it('should show the menu if menu is not visible', () => {
    const initialState = {
      isVisibleMenu: false
    }

    const action = showMenu();
    const newState = menu(initialState, action);

    expect(newState.isVisibleMenu).toEqual(true);
  });

  it('should show hidde the menu if menu is visible', () => {
    const initialState = {
      isVisibleMenu: true
    }

    const action = showMenu();
    const newState = menu(initialState, action);

    expect(newState.isVisibleMenu).toEqual(false);
  });
});
