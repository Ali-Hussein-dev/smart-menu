import { render } from '@testing-library/react'
import DishItem, { DrawerTitle } from '../../src/components/DishItem'
import dishes from '../../database/dishes/dishes'
describe('DishItem', () => {
  test('DishItem matches snapshot', () => {
    const { container } = render(
      <DishItem
        price={dishes[4].list[0].price}
        name={dishes[4].list[0].name}
        description={dishes[4].list[0].description}
      />
    )
    expect(container).toMatchSnapshot()
  })
  test('DrawerTitle matches snapshot', () => {
    const { container } = render(<DrawerTitle name={dishes[4].list[0].name} />)
    expect(container).toMatchSnapshot()
  })
})
