import RestaurantPage from 'src/pages/restaurants/[name]'
import { render, screen } from '../testUtils'

describe('Restaurant Page', () => {
  render(<RestaurantPage />)
  test('Expect menu btns to have text content(de)', () => {
    expect(screen.getByLabelText('drinks')).toHaveTextContent('Getränkekarte')
    expect(screen.getByLabelText('dishes')).toHaveTextContent('Speisekarte')
  })
})
