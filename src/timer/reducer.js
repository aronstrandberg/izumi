import {
  TIMER_STARTED,
  TIMER_TICK,
} from 'timer/events'

const initialState = {
  seconds: 0,
  rounds: 0,
  workTime: 12,
}

function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case TIMER_STARTED: {
      return handleTimerStarted(state, payload)
    }
    case TIMER_TICK: {
      return handleTimerTick(state, payload)
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
    rounds: state.rounds + 1
  }
}

function handleTimerTick(state, payload) {
  return {
    ...state,
    seconds: state.seconds - 1
  }
}

export default reducer
