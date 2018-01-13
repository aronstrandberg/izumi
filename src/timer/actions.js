import {
  TIMER_STARTED,
  TIMER_TICK,
} from 'timer/events'
import {
  timerComplete,
} from 'timer/selectors'

let timer = null

export function startTimer({ seconds }) {
  return (dispatch) => {
    clearInterval(timer)
    timer = setInterval(() => {
      dispatch(tick())
    }, 1000)
    dispatch(timerStarted({ seconds }))
  }
}

export function tick() {
  return (dispatch, getState) => {
    const { timer } = getState()
    if (!timerComplete(timer)) {
      dispatch(timerTick())
    } else {
      dispatch(startTimer({ seconds: timer.workTime }))
    }
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

export function stop() {
  return (dispatch) => {
    clearInterval(timer)
  }
}
