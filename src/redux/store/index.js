import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducers, {}, applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
  })
))

export default store
