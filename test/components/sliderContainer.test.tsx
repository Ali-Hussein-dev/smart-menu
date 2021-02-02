import SlidersContainer from '@/components/drinks/SlidersContainer'
import { SliderChildren } from '@/components/leaf-node'
import React from 'react'
import { render, screen } from '../testUtils'
import userEvent from '@testing-library/user-event'
import { Children } from './sliderChildren.test'

describe('Slider Contanier', () => {
  let toggleInfo, children

  test('expect... when...', () => {
    const { container, debug } = render(
      <SlidersContainer>
        <SliderChildren>
          <Children />
        </SliderChildren>
      </SlidersContainer>
    )
    toggleInfo = screen.getByLabelText(/toggle-info/i)
    // -----Click event to display content
    userEvent.click(toggleInfo)
    children = screen.queryByTestId('children')
    expect(children).toBeVisible()
    // -----Click event to hidden content
    userEvent.click(toggleInfo)
    children = screen.queryByTestId('children')
    expect(children).toBe(null)
    debug(container)
  })
})
