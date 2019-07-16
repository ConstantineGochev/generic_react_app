import { combineReducers } from 'redux';
import test_reducer from './test_reducer'
export default combineReducers({
    test: () => test_reducer,
})