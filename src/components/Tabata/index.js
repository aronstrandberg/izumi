import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setComplete } from 'timer/selectors'

class Tabat extends Component {
  render = () => {
    const { active, round, rounds, seconds, resting, complete } = this.props
    return (
      <div>
        <p>{ complete && 'DONE' }</p>
        <p>{ active && !complete && (resting ? 'REST' : 'WORK') }</p>
        <p>Round { round }/{ rounds }</p>
        <p>Seconds { seconds }</p>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    active: state.timer.active,
    seconds: state.timer.seconds,
    round: state.timer.round,
    resting: state.timer.resting,
    rounds: state.timer.sizes.set,
    complete: setComplete(state.timer)
  }
}

Tabata.propTypes = {
  round: PropTypes.number,
}

export default connect(mapStateToProps)(Tabata)
export {
  Tabata
}
