import dayjs from 'dayjs'

export const withinTimeRange = (
  currentTime: number,
  startTime: number,
  endTime: number
): boolean => {
  if (currentTime > 1440 || currentTime < 0) {
    throw new Error('currentTime must be between 0-1440')
  }
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
