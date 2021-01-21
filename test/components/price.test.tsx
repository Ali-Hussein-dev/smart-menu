import { render } from '@testing-library/react'
import { Price } from '../../src/components/leaf-node'
const price = {
  p1: 4.5,
  p2: 2.5,
}
/**
 *  missing cases
 * - snapshot: with info button, it requires hook call
 * - snapshot: prices in Happy Hour
 * - snapshot: prices with size unit
 * - user Events: info btn clicked
 */
describe('Price', () => {
  test('price matches snapshot', () => {
    const { container } = render(<Price price={price} />)
    expect(container).toMatchSnapshot()
  })
})
