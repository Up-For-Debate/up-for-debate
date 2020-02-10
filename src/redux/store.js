import addressReducer from './addressReducer'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(addressReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))

export default store 