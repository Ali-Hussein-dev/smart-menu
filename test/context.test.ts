import { renderHook, act } from '@testing-library/react-hooks'
import React from 'react'
import MegaList from '../database'
import { reducer } from '../src/context'

describe('Reducer Function', () => {
  let result, dispatch
  beforeEach(() => {
    result = renderHook(() => React.useReducer(reducer, MegaList[0]))
    dispatch = result.result.current[1]
  })
  test('Toggle HH WHEN dispatching relevant action type', () => {
    act(() => {
      dispatch({ type: 'onHH' })
    })
    expect(result.result.current[0].meta.isHH).toBe(true)
    act(() => {
      dispatch({ type: 'offHH' })
    })
    expect(result.result.current[0].meta.isHH).toBe(false)
  })
  test('Toggle isCocktailAvailable WHEN dispatching relevant action type', () => {
    act(() => {
      dispatch({ type: 'onAvailable' })
    })
    expect(result.result.current[0].meta.isCocktailAvailable).toBe(true)
    act(() => {
      dispatch({ type: 'offAvailable' })
    })
    expect(result.result.current[0].meta.isCocktailAvailable).toBe(false)
  })
  test('Toggle isLunch when dispatching relevant action type', () => {
    act(() => {
      dispatch({ type: 'onLunch' })
    })
    expect(result.result.current[0].meta.isLunch).toBe(true)
    act(() => {
      dispatch({ type: 'offLunch' })
    })
    expect(result.result.current[0].meta.isLunch).toBe(false)
  })
})
