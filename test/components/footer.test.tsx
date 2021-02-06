import Footer from '@/components/Footer'
import { render } from '../testUtils'

describe('Footer', () => {
  const currentYear = new Date().getFullYear().toString()
  test('expect current year to be visible', () => {
    const { container } = render(<Footer />)
    expect(container).toHaveTextContent(currentYear)
  })
})
