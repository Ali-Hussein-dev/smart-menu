/**
 * !issues
 * can't test if CocktailWrapper children are visible, due to no being able to update hooks: currentTime,
 */

import CocktailWrapper from '@/components/drinks/CocktailWrapper'
import { render } from '../testUtils'
import * as React from 'react'
import { renderHook, cleanup } from '@testing-library/react-hooks'
import MegaList from '@/database/index'
import { reducer } from 'src/context'
afterEach(cleanup)
describe('cockatil Accordion', () => {
  test('Expect no cocktail menu', () => {
    renderHook(() => React.useReducer(reducer, MegaList[0]))
    const { container } = render(
      <CocktailWrapper>Mock Cocktail Menu </CocktailWrapper>
    )
    expect(container).toHaveTextContent('17:00 Uhr')
  })
})
