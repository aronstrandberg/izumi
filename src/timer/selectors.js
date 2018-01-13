export function timerComplete({ seconds }) {
  return seconds === 0
}

export function roundComplete({ resting, ...timer }) {
  return resting && timerComplete(timer)
}

export function setComplete({ round, sizes, ...timer }) {
  return (round === sizes.set) && roundComplete(timer)
}
