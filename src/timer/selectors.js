export function timerComplete({ seconds }) {
  return seconds === 0
}

export function roundComplete({ resting, ...timer }) {
  return resting && timerComplete(timer)
}

export function setComplete({ round, sizes, ...timer }) {
  return (round === sizes.set) && roundComplete(timer)
}

export function getStatusText({ active, completed, resting, paused }) {
  if (completed) {
    return 'done'
  }
  if (paused) {
    return 'pause'
  }
  if (resting) {
    return 'rest'
  }
  if (active) {
    return 'work'
  }
  return ' '
}

export function getStartButtonText({ active, paused }) {
  if (!active) {
    return 'start'
  }
  if (active) {
    if (paused) {
      return 'resume'
    } else {
      return 'pause'
    }
  }
}
