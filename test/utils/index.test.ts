import {
  convertNumToTimeFormat,
  withinTimeRange,
  validateTime,
} from '../../src/utils/index'
//--------------------------------------withinTimeRange
describe('withinTimeRange', () => {
  let currentTime, startTime, endTime, finalValue
  test('expect false WHEN currentTime is out of time range', () => {
    currentTime = 1000
    startTime = 1020
    endTime = 1140
    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(false)
    currentTime = 1141
    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(false)
  })
  test('expect true WHEN currentTime is within time range', () => {
    currentTime = 1020
    startTime = 1020
    endTime = 1140

    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(true)

    currentTime = 1021
    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(true)

    currentTime = 1140
    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(true)
  })
  test('expect true WHEN currentTime is within time range but belongs to the next day', () => {
    currentTime = 20
    startTime = 1350
    endTime = 30
    finalValue = withinTimeRange(currentTime, startTime, endTime)
    expect(finalValue).toBe(true)
  })
})
//--------------------------------------convertNumToTimeFormat
describe('convertNumToTimeFormat', () => {
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
  test('should throw an error WHEN passing invalid number out of 0-60', () => {
    expect(() => {
      convertNumToTimeFormat(61, 'mm')
    }).toThrowError(/first Param must have value between 0-60/i)

    expect(() => {
      convertNumToTimeFormat(25, 'HH')
    }).toThrowError(/first Param must have value between 0-24/i)

    expect(() => {
      convertNumToTimeFormat(-1, 'HH')
    }).toThrowError(/first Param must have value between 0-24/i)
  })
})
//--------------------------------------validateTime
describe('validateTime', () => {
  test('should throw an error WHEN passing number > 1440', () => {
    expect(() => {
      validateTime(1441)
    }).toThrow()
  })
  test('should throw an error WHEN passing number < 0', () => {
    expect(() => {
      validateTime(-1)
    }).toThrow()
  })
})
//--------------------------------------getIntervals
