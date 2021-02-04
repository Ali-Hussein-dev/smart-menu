import dayjs from 'dayjs'

const validateTime = (time: number): Error | void => {
  if (time > 1440 || time < 0) {
    throw new Error('Time must be between 0-1440')
  }
}

export const withinTimeRange = (
  currentTime: number,
  startTime: number,
  endTime: number
): boolean => {
  validateTime(currentTime)
  // Edge case: when endTime is less than startTime ex. 22:00-00:30
  if (startTime > endTime) {
    if (currentTime >= startTime && currentTime <= 1440) {
      return true
    } else if (currentTime < endTime) {
      return true
    } else return false
  }
  // normal case
  if (currentTime >= startTime && currentTime <= endTime) {
    return true
  } else return false
}

export const convertNumToTimeFormat = (
  a: number,
  b: 'HH' | 'mm'
): string | Error => {
  return b === 'mm' && (a > 60 || a < 0)
    ? new Error('first Param must have value between 0-60 ')
    : b === 'HH' && (a > 24 || a < 0)
    ? new Error('first Param must have value between 0-24 ')
    : b === 'mm'
    ? dayjs().minute(a).format('mm')
    : b === 'HH'
    ? dayjs().hour(a).format('HH')
    : new Error('Params are Invalid')
}

export const concatenateHrsMin = (hrs: number, min: number): string => {
  return `${convertNumToTimeFormat(hrs, 'HH')}:${convertNumToTimeFormat(
    min,
    'mm'
  )}`
}

/**
 * case minus
 *  sub-case: diff is less than 10 => run every min
 *  sub-case: diff is greater than 10 => run every hour
 * case positive
 *
 * case HH: start, end
 *
 */
/**
 * determine intervals,
 * when to clean setInterval
 *
 */

export const timeListener = (
  currentTime: number,
  targetTime: number,
  interval?: number
): number => {
  const diffTime = targetTime - currentTime
  if (diffTime < 15 && diffTime > -15) {
    // setInterval run every 1min
    return interval || 6
  } else if (diffTime < 60) {
    // setInterval run every 10min
    return interval || 600
  } else {
    // setInterval run every 1hour
    return interval || 6000
  }
}

export const withTimeRangeForDishes = (
  currentTime: number,
  startTime: number,
  endTime?: number
): boolean => {
  validateTime(currentTime)
  if (!endTime) {
    if (currentTime < startTime) {
      return false
    } else if (currentTime >= startTime) {
      return true
    }
  } else {
    if (currentTime < startTime || currentTime >= endTime) {
      return false
    } else if (currentTime >= startTime && currentTime <= endTime) {
      return true
    }
  }
}
// console.log(withTimeRangeForDishes(1040, 660, 1050))
