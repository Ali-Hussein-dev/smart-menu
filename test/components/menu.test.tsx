/**
 * !issues
 * can't test click event,
 *    error msg: Cannot read property 'catch' of undefined
 *
 */
import preloadAll from 'jest-next-dynamic'
import MenuPage from 'src/pages/restaurants/[name]/[menu]'
import { render, screen } from '../testUtils'

//--------------------------------------
beforeAll(async () => {
  await preloadAll()
})

describe('Menu page: drinks', () => {
  test('Expect toggle menu btn to have dishes as label text', async () => {
    render(<MenuPage />)
    const btn = screen.getByLabelText('dishes')
    expect(btn).toBeVisible()
  })
  test('Expect Drinks menu', async () => {
    const { container } = render(<MenuPage />)
    expect(container).toHaveTextContent('Softdrinks')
  })
})
