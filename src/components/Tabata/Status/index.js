import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getStatusText } from 'timer/selectors'
import css from './styles.css'

function Status({ timer }) {
  const status = getStatusText(timer)
  return (
    <p className={css.status}>
      { status }
    </p>
  )
}

function mapStateToProps({ timer }, props) {
  return {
    timer,
  }
}

Status.propTypes = {
  timer: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Status)
