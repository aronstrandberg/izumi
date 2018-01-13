import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import reducers from 'reducers'

const history = createHistory()

const middlewares = [
  thunk,
  routerMiddleware(history),
]

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares)
  )
)

export default store
export {
  history,
}
