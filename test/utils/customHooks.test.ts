import { renderHook, cleanup } from '@testing-library/react-hooks'
import { useInterval } from 'src/utils'

// eslint-disable-next-line prefer-const
let dep = 0
afterEach(cleanup)
jest.useFakeTimers()
describe('CustomHooks: useInterval', () => {
  let cb
  test("Expect 'cb' NOT be called WHEN passing 'delay' of one sec", () => {
    cb = jest.fn()
    renderHook(() => useInterval(cb, [dep], 1))
    expect(cb).toHaveBeenCalledTimes(0)
  })
  test("Expect 'cb' to be called twice", () => {
    cb = jest.fn()
    renderHook(() => useInterval(cb, [dep], 5))
    expect(cb).toHaveBeenCalledTimes(0)
    jest.advanceTimersByTime(100)
    expect(cb).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(5000)
    expect(cb).toHaveBeenCalledTimes(2)
  })
})
