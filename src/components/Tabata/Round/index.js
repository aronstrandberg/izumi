import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import css from './styles.css'

function Round({ round, rounds }) {
  return (
    <p className={css.round}>
      Round { round }/{ rounds }
    </p>
  )
}

function mapStateToProps({ timer }, props) {
  return {
    round: timer.round,
    rounds: timer.sizes.set,
  }
}

export default connect(mapStateToProps)(Round)
