import {
  TIMER_STARTED,
  TIMER_TICK,
  WORK_STARTED,
  REST_STARTED,
} from 'timer/events'

const initialState = {
  seconds: 0,
  round: 0,
  resting: false,
  sizes: {
    work: 3,
    rest: 3,
    set: 3
  }
}

function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case TIMER_STARTED: {
      return handleTimerStarted(state, payload)
    }
    case TIMER_TICK: {
      return handleTimerTick(state, payload)
    }
    case WORK_STARTED: {
      return handleWorkStarted(state, payload)
    }
    case REST_STARTED: {
      return handleRestStarted(state, payload)
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

export default reducer
