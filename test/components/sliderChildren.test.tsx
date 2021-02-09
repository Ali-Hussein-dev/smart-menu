/**
 * can't test user-event toggling due to inner logic "hooks"
 */
import { SliderChildren } from '@/components/leaf-node'
import * as React from 'react'
import { render, screen } from '../testUtils'
import userEvent from '@testing-library/user-event'

export const Children: React.FC = () => (
  <div data-testid="children">
    <h2>Hidden children</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci iste at
    odio in veritatis aspernatur, laudantium autem nulla ullam praesentium.
  </div>
)
describe('SliderChildren', () => {
  let toggleInfo, children
  test('Expect toggle-info to be visible & children is hidden', () => {
    render(
      <SliderChildren isInfoOpen={false}>
        <Children />
      </SliderChildren>
    )
    toggleInfo = screen.getByLabelText(/toggle-info/i)
    children = screen.queryByTestId('children')
    expect(toggleInfo).toBeVisible()
    expect(children).toBe(null)
  })
  test('Expect children to be visible | hidden WHEN toggle-info is clicked', () => {
    render(
      <SliderChildren isInfoOpen={false}>
        <Children />
      </SliderChildren>
    )
    toggleInfo = screen.getByLabelText(/toggle-info/i)
    // -----Click event to display content
    expect(children).toBe(null)
    userEvent.click(toggleInfo)
    children = screen.queryByTestId('children')
    expect(children).toBeVisible()
  })
})
