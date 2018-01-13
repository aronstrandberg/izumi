import {
  TIMER_STARTED,
  TIMER_TICK,
  WORK_STARTED,
  REST_STARTED,
} from 'timer/events'
import {
  timerComplete,
  setComplete,
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

    if (setComplete(timer)) {
      dispatch(stop())
      return
    }

    if (!timerComplete(timer)) {
      dispatch(timerTick())
    } else {
      if (timer.resting) {
        dispatch(startWork())
      } else {
        dispatch(startRest())
      }
    }
  }
}

export function startWork() {
  return (dispatch, getState) => {
    const { timer } = getState()
    dispatch(startTimer({ seconds: timer.sizes.work }))
    dispatch(workStarted())
  }
}

export function startRest() {
  return (dispatch, getState) => {
    const { timer } = getState()
    dispatch(startTimer({ seconds: timer.sizes.rest }))
    dispatch(restStarted())
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

export function workStarted() {
  return {
    type: WORK_STARTED
  }
}

export function restStarted() {
  return {
    type: REST_STARTED
  }
}

export function stop() {
  return (dispatch) => {
    clearInterval(timer)
  }
}
