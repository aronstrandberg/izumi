import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import css from './styles.css'

function Countdown({ seconds }) {
  return (
    <h1 className={css.countdown}>
      { seconds }
    </h1>
  )
}

function mapStateToProps({ timer }) {
  return {
    seconds: timer.seconds,
  }
}

Countdown.propTypes = {
  seconds: PropTypes.number,
}

export default connect(mapStateToProps)(Countdown)
