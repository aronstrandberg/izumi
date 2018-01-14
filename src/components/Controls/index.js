import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startSet, togglePause } from 'timer/actions'

class Controls extends Component {
  handleClick = () => {
    const { active, start, togglePause } = this.props
    if (!active) {
      start()
    } else {
      togglePause()
    }
  }
  render = () => {
    const { active, paused } = this.props
    return (
      <div>
        <Button onClick={this.handleClick}>
          { !active && 'start' }
          { active && !paused && 'pause' }
          { active && paused && 'resume' }
        </Button>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    active: state.timer.active,
    paused: state.timer.paused,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    start() { dispatch(startSet()) },
    togglePause() { dispatch(togglePause()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

const Button = ({ children, ...props }) => (
  <button type="button" {...props}>
    { children }
  </button>
)
