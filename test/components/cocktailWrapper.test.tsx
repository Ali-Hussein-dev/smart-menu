/**
 * !issues
 * can't test if CocktailWrapper children are visible, error msg: dispatch is not a function. causing-issue implementation is commented out
 */

/* eslint-disable prefer-const */
import CocktailWrapper from '@/components/drinks/CocktailWrapper'
import { render } from '../testUtils'
import * as React from 'react'
// import { renderHook, act } from '@testing-library/react-hooks'

describe('cockatil Accordion', () => {
  // let dispatch
  // const { result } = renderHook(() => React.useReducer(reducer, MegaList[0]))
  // state = result.current[0]
  // dispatch = result.current[1]
  test('Expect no cocktail menu', () => {
    const { container } = render(
      <CocktailWrapper currentTime={900}>Mock Cocktail Menu </CocktailWrapper>
    )
    expect(container).toHaveTextContent(
      'Cocktail Karte steht erst um 17:00 Uhr zur Verfügung'
    )
  })
  // test("expect cocktail NOT to be visible WHEN dispatching 'onAvailable'", () => {
  //   const { container } = render(
  //       <CocktailWrapper currentTime={1100}>Mock Cocktail Menu </CocktailWrapper>
  //   )
  //    act(() => {
  //      dispatch({ type: 'onHH' })
  //    })
  //   expect(container).toHaveTextContent('Mock Cocktail Menu')
  // })
})
