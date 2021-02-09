import { Lunch } from '@/components/dishes'
import MegaList from '@/database/index'
import { render } from '../testUtils'
describe('Lunch', () => {
  test('expect header to be visible before 17:00', () => {
    const { container } = render(
      <Lunch items={MegaList[0].menu.de.dishes.lunch} />
    )
    expect(container).not.toHaveTextContent('Mittagessen')
  })
})
