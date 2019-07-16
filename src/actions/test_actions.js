import {test_types} from './actions_types'

export function set_test_string(str) {
    return {
        type: test_types.SET_TEST,
        payload: str
      };
}