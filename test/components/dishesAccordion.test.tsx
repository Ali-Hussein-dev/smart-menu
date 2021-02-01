import preloadAll from 'jest-next-dynamic'
import DishesAccordion from '@/components/dishes/DishesAccordion'
import { render } from '../testUtils'
import MegaList from '@/database/index'

beforeAll(async () => {
  await preloadAll()
})
const list = MegaList[0].menu.de.dishes.dishes

describe('DishesAccordion', () => {
  test('matches snapshot', () => {
    const { container } = render(<DishesAccordion dishes={list} />)
    expect(container).toMatchSnapshot()
  })
  test('to have a header content', () => {
    const { container } = render(<DishesAccordion dishes={list} />)
    expect(container).toHaveTextContent('Klassik')
  })
})
