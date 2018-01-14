import {
  TIMER_STARTED,
  TIMER_TICK,
  TIMER_PAUSED,
  TIMER_RESUMED,
  WORK_STARTED,
  REST_STARTED,
  SET_STARTED,
  SET_COMPLETED,
} from 'timer/events'
import {
  defaultTabataSizes
} from 'timer/helpers'

const initialState = {
  active: false,
  seconds: 0,
  round: 0,
  resting: false,
  paused: false,
  completed: false,
  sizes: defaultTabataSizes()
}

function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case TIMER_STARTED: {
      return handleTimerStarted(state, payload)
    }
    case TIMER_TICK: {
      return handleTimerTick(state, payload)
    }
    case TIMER_PAUSED: {
      return handleTimerPaused(state, payload)
    }
    case TIMER_RESUMED: {
      return handleTimerResumed(state, payload)
    }
    case WORK_STARTED: {
      return handleWorkStarted(state, payload)
    }
    case REST_STARTED: {
      return handleRestStarted(state, payload)
    }
    case SET_STARTED: {
      return handleSetStarted(state, payload)
    }
    case SET_COMPLETED: {
      return handleSetCompleted(state, payload)
    }
    default: {
      return state
    }
  }
}

function handleTimerStarted(state, payload) {
  const { seconds } = payload
  return {
    ...state,
    seconds,
  }
}

function handleTimerTick(state, payload) {
  return {
    ...state,
    seconds: state.seconds - 1
  }
}

function handleTimerPaused(state, payload) {
  return {
    ...state,
    paused: true
  }
}

function handleTimerResumed(state, payload) {
  return {
    ...state,
    paused: false
  }
}

function handleWorkStarted(state, payload) {
  return {
    ...state,
    resting: false,
    round: state.round + 1
  }
}

function handleRestStarted(state, payload) {
  return {
    ...state,
    resting: true,
  }
}

function handleSetStarted(state, payload) {
  return {
    ...state,
    active: true,
    completed: false,
    round: 0
  }
}

function handleSetCompleted(state, payload) {
  return {
    ...state,
    active: false,
    completed: true,
  }
}

export default reducer
