import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startTimer } from 'timer/actions'

class Timer extends Component {
  startTimer = () => {
    this.props.startTimer(5)
  }
  componentDidMount = () => {
    this.startTimer()
  }
  render = () => {
    const { rounds, seconds } = this.props
    return (
      <div>
        <p>Round { rounds }</p>
        <p>Seconds { seconds }</p>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    seconds: state.timer.seconds,
    rounds: state.timer.rounds,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer(seconds) { dispatch(startTimer({ seconds })) },
  }
}

Timer.propTypes = {
  rounds: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
export {
  Timer
}
