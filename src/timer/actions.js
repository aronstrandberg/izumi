import {
  TIMER_STARTED,
  TIMER_TICK,
  TIMER_PAUSED,
  TIMER_RESUMED,
  TIMER_RESET,
  WORK_STARTED,
  REST_STARTED,
  SET_STARTED,
  SET_COMPLETED,
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

    if (timer.paused || !timer.active) {
      return
    }

    if (setComplete(timer)) {
      dispatch(completeSet())
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
    dispatch(workStarted())
    dispatch(startTimer({ seconds: timer.sizes.work }))
  }
}

export function startRest() {
  return (dispatch, getState) => {
    const { timer } = getState()
    dispatch(restStarted())
    dispatch(startTimer({ seconds: timer.sizes.rest }))
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

export function pause() {
  return (dispatch) => {
    dispatch(timerPaused())
  }
}

export function resume() {
  return (dispatch) => {
    dispatch(timerResumed())
  }
}

export function togglePause() {
  return (dispatch, getState) => {
    const { timer } = getState()
    if (timer.paused) {
      dispatch(resume())
    } else {
      dispatch(pause())
    }
  }
}

export function stop() {
  return (dispatch) => {
    clearInterval(timer)
  }
}


export function startSet() {
  return (dispatch) => {
    dispatch(setStarted())
    dispatch(startWork())
  }
}

export function completeSet() {
  return (dispatch) => {
    dispatch(setCompleted())
    dispatch(stop())
  }
}

export function reset() {
  return (dispatch) => {
    dispatch(timerReset())
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

export function timerPaused() {
  return {
    type: TIMER_PAUSED
  }
}

export function timerResumed() {
  return {
    type: TIMER_RESUMED
  }
}

export function timerReset() {
  return {
    type: TIMER_RESET
  }
}

export function setStarted() {
  return {
    type: SET_STARTED
  }
}

export function setCompleted() {
  return {
    type: SET_COMPLETED
  }
}
