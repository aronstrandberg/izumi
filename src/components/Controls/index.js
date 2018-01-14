import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startSet, togglePause, reset } from 'timer/actions'
import { getStartButtonText } from 'timer/selectors'
import Button from 'components/Button'
import css from './styles.css'

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
    const buttonText = getStartButtonText({ active, paused })
    return (
      <div className={css.controls}>
        <Button onClick={this.handleClick}>
          { buttonText }
        </Button>
        <Button onClick={this.props.reset}>
          Reset
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
    reset() { dispatch(reset()) },
  }
}

Controls.propTypes = {
  active: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
