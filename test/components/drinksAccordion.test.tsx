/**
 * !issues
 * console.error:
 * actWarning: An update to ForwardRef(LoadableComponent) inside a test was not wrapped in act(...)
 * assumed reason: dynamic import, no events are fired to update states
 */
import { render } from '../testUtils'
import preloadAll from 'jest-next-dynamic'
import DrinksAccordion from '@/components/drinks/DrinksAccordion'
import MegaList from '@/database/index'

beforeAll(async () => {
  await preloadAll()
})
describe('Drink Accordion', () => {
  const props = MegaList[0].menu.de.drinks.drinks
  const softdrinkItemList = props[1][1].list[1][1].itemsList
  test('expect menu headers ', async () => {
    const { container } = render(<DrinksAccordion drinks={props} />)
    expect(container).toHaveTextContent(props[0][0].header)
    expect(container).toHaveTextContent(props[1][0].header)
  })
  test('expect arbitrary Softdrinks item: Fanta ', async () => {
    const { container } = render(<DrinksAccordion drinks={props} />)
    expect(container).toHaveTextContent('Fanta')
  })
  test('expect arbitrary Softdrinks item: fanta price + size + sizeUnit ', async () => {
    const { container } = render(<DrinksAccordion drinks={props} />)
    expect(container).toHaveTextContent(
      softdrinkItemList[2].price.p1.toString()
    )
    expect(container).toHaveTextContent(
      softdrinkItemList[2].size.s1.toString() + 'L'
    )
  })
})
