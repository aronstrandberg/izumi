import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import css from './App.css'
import Timer from 'components/Timer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
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
  </div>
)

export default hot(module)(App)
