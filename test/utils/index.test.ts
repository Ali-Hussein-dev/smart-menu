import { convertNumToTimeFormat, withinTimeRange } from '../../src/utils/index'

describe('withTimeRange', () => {
  let currentTime, startTime, endTime, finalValue
  test('expect false', () => {
    currentTime = 1000
    startTime = 1020
    endTime = 1140
    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(false)
  })
  test('expect true', () => {
    currentTime = 1020
    startTime = 1020
    endTime = 1140
    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(true)
  })
  test('expect true WHEN startTime & endTime are not in the day', () => {
    currentTime = 20
    startTime = 1350
    endTime = 30
    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(true)
  })
})

describe('formatTime', () => {
  let timeFormat
  test('Expect 3min to be formated to 03', () => {
    timeFormat = convertNumToTimeFormat(3, 'mm')
    expect(timeFormat).toBe('03')
  })
  test('Expect 60min to be formated to 00', () => {
    timeFormat = convertNumToTimeFormat(60, 'mm')
    expect(timeFormat).toBe('00')
  })
  test('Expect 24hrs to be formated to 00', () => {
    timeFormat = convertNumToTimeFormat(24, 'HH')
    expect(timeFormat).toBe('00')
  })
  test('Expect 13hrs to be formated to 13', () => {
    timeFormat = convertNumToTimeFormat(13, 'HH')
    expect(timeFormat).toBe('13')
  })
})
