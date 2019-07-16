import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers'


let store = createStore(reducers, applyMiddleware(thunk, promiseMiddleware))
export {store}