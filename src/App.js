import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import store, { history } from 'store'
import css from './App.css'
import Timer from 'components/Timer'
import Controls from 'components/Controls'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    )
  }
}

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

const Home = () => (
  <div className={css.app}>
    izumi
    <Timer />
    <Controls />
  </div>
)

export default hot(module)(App)
