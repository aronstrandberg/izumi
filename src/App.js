import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import logo from './logo.svg'
import css from './App.css'

class App extends Component {
  render() {
    return (
      <div className={css.app}>
        izumi
      </div>
    )
  }
}

export default hot(module)(App)
