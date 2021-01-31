import { DishItem } from '@/components/dishes'
import { render } from '../testUtils'

interface itemType extends Menu.Item, Menu.DishItem {}
const foodItem: itemType = {
  name: 'Food Item',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique ipsam debitis nobis alias quasi molestias expedita! Eos, totam nostrum!',
  price: { p1: 30 },
  dressing: 'Honig-Balsamico',
  info: {
    eatStyle: {
      header: 'Essen Stil',
      infoList: [{ label: 'Vegan' }],
    },
  },
}
describe('DishItem', () => {
  test('matches snapshot', () => {
    const { container } = render(<DishItem item={foodItem} />)
    expect(container).toMatchSnapshot()
  })
})
