import {
  TIMER_STARTED,
  TIMER_TICK,
} from 'timer/events'

export function startTimer({ seconds }) {
  return (dispatch) => {
    dispatch(timerStarted({ seconds }))
  }
}

export function tickTimer() {
  return (dispatch) => {
    dispatch(timerTick())
  }
}

export function timerStarted({ seconds }) {
  return {
    type: TIMER_STARTED,
    payload: {
      seconds,
    }
  }
}

export function timerTick() {
  return {
    type: TIMER_TICK
  }
}
