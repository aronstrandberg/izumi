import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import store, { history } from 'store'
import css from './App.css'
import Home from 'components/Home'

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
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Layout>
)

const Layout = ({ children }) => (
  <div className={css.app}>
    { children }
  </div>
)

export default hot(module)(App)
