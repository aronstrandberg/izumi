export function defaultTabataSizes() {
  if (process.env.NODE_ENV === 'development') {
    return {
      work: 3,
      rest: 3,
      set: 3
    }
  } else {
    return {
      work: 20,
      rest: 10,
      set: 8
    }
  }
}
