export * from './customHooks'
import dayjs from 'dayjs'

export const validateTime = (time: number): Error | void => {
  if (time > 1440 || time < 0) {
    throw new Error('Time must be between 0-1440')
  }
}
//--------------------------------------1
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
//--------------------------------------2
export const convertNumToTimeFormat = (
  a: number,
  b: 'HH' | 'mm'
): string | Error => {
  if (b === 'mm' && (a > 60 || a < 0)) {
    throw new Error('first Param must have value between 0-60')
  } else if (b === 'HH' && (a > 24 || a < 0)) {
    throw new Error('first Param must have value between 0-24')
  }

  return b === 'mm'
    ? dayjs().minute(a).format('mm')
    : b === 'HH'
    ? dayjs().hour(a).format('HH')
    : null
}

//--------------------------------------3

export const concatenateHrsMin = (time: Menu.Hour): string => {
  const { hrs, min } = time
  return `${convertNumToTimeFormat(hrs, 'HH')}:${convertNumToTimeFormat(
    min,
    'mm'
  )}`
}

/**
 *
 * @param currentTime client current time
 * @param targetTime is when update should happen: e.x startTime, endTime
 * @param interval determine intervals long of setInterval function based on how far currentTime away from targetTime
 */
//--------------------------------------4
export const getIntervals = (
  currentTime: number,
  targetTime: number,
  interval?: number
): number => {
  const diffTime = targetTime - currentTime
  if (diffTime < 15 && diffTime > -15) {
    // setInterval run every 1min WHEN ct is +- 15tt
    return interval || 6
  } else if (diffTime < 60) {
    // setInterval run every 10min WHEN ct is 60min less than tt
    return interval || 600
  } else {
    // setInterval run every 1hour
    return interval || 6000
  }
}
//--------------------------------------5
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
