import { TEST_OK, TEST_ERROR } from '../actions/test';

export default(state = { item: false }, action = {}) => {
  switch (action.type) {
    case TEST_OK:
      return Object.assign({}, state, {
        item: true
      })
    case TEST_ERROR:
      return Object.assign({}, state, {
        item: false
      })

    default:
      return state;

  }
}