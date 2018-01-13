import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startWork } from 'timer/actions'
import { setComplete } from 'timer/selectors'

class Timer extends Component {
  startWork = () => {
    this.props.startWork()
  }
  componentDidMount = () => {
    this.startWork()
  }
  render = () => {
    const { round, rounds, seconds, resting, complete } = this.props
    return (
      <div>
        <p>{ complete && 'DONE'  }</p>
        <p>{ !complete && (resting ? 'REST' : 'WORK') }</p>
        <p>Round { round }/{ rounds }</p>
        <p>Seconds { seconds }</p>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    seconds: state.timer.seconds,
    round: state.timer.round,
    resting: state.timer.resting,
    rounds: state.timer.sizes.set,
    complete: setComplete(state.timer)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startWork(seconds) { dispatch(startWork()) },
  }
}

Timer.propTypes = {
  round: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
export {
  Timer
}
