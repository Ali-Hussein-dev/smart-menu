import RestaurantsIndex from 'src/pages/restaurants'
import { render } from '../testUtils'

describe('Restaurants List', () => {
  test("Expect to have 'Liste'", () => {
    const { container } = render(<RestaurantsIndex />)
    expect(container).toHaveTextContent('Liste')
  })
})
