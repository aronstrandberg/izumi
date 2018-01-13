import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import css from './App.css'
import Timer from 'components/Timer'

class App extends Component {
  render() {
    return (
      <div className={css.app}>
        izumi
        <Timer />
      </div>
    )
  }
}

export default hot(module)(App)
