import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Countdown from 'react-countdown-now'
import { startTimer } from 'timer/actions'
const TWENTY = 20000

class Timer extends Component {
  startTimer = () => {
    this.props.startTimer(20)
  }
  componentDidMount = () => {
    this.startTimer()
  }
  render = () => {
    const { rounds } = this.props
    return (
      <div>
        <br />
        Round { rounds }
        <br />
        <Countdown
          date={Date.now() + TWENTY}
          renderer={TimerRenderer}
          onComplete={this.startTimer}
        />
      </div>
    )
  }
}

const TimerRenderer = ({ seconds }) => (
  <span>{seconds}</span>
)

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

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
export {
  Timer
}
