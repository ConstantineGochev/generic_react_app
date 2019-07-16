import { test_types } from "../actions/action_types";

const initial_state = {
  test_str: 'TEST',
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case test_types.SET_TEST:
    console.log(state)
    return Object.assign({}, state, {
        test_str: action.payload,
      });

    default:
      return state;
  }
}