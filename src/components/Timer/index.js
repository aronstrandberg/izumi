import React from 'react'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown-now'

const TWENTY = 20000

const Timer = () => {
  return (
    <Countdown
      date={Date.now() + TWENTY}
      renderer={TimerRenderer}
    />
  )
}

const TimerRenderer = ({ seconds }) => (
  <span>{seconds}</span>
)

export default Timer
