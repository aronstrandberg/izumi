import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
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
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

export default store
export {
  history,
}
