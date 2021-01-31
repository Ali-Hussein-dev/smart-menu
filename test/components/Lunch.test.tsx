import { Lunch } from '@/components/dishes'
import { render } from '../testUtils'
describe('Lunch', () => {
  test('expect header to be visible before 17:00', () => {
    const { container } = render(<Lunch currentTime={1000} />)
    expect(container).toHaveTextContent('Mittagessen')
  })
  test('expect header to be visible 3hrs earlier than defined', () => {
    const { container } = render(<Lunch currentTime={610} />)
    expect(container).toHaveTextContent('Mittagessen')
  })
  test('expect to be empty AFTER 17:00', () => {
    const { container } = render(<Lunch currentTime={1200} />)
    expect(container).toBeEmptyDOMElement()
  })
})
