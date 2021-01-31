import DynamicPanel from '@/components/drinks/DynamicPanel'
import { render } from '../testUtils'

describe('Dynamic Panel', () => {
  const { container } = render(<DynamicPanel>children</DynamicPanel>)
  test('matches snapshot', () => {
    expect(container).toMatchSnapshot()
  })
})
