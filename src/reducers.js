import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import timer from 'timer/reducer'

const reducers = combineReducers({
  router,
  timer,
})

export default reducers
