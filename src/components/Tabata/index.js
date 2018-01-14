import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setComplete } from 'timer/selectors'
import Status from 'components/Tabata/Status'
import Round from 'components/Tabata/Round'
import Countdown from 'components/Tabata/Countdown'
import css from './styles.css'

class Tabata extends Component {
  render = () => {
    const { active, round, rounds, seconds, resting, complete } = this.props
    return (
      <div className={css.tabata}>
        <div className={css.data}>
          <Round />
          <Status />
        </div>
        <Countdown />
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
