import * as React from 'react'
import { render } from '../testUtils'
import { Home } from '../../src/pages/index'

describe('Home page', () => {
  it("Expect to have 'Interactive-Menu'", () => {
    const { container } = render(<Home />, {})
    expect(container).toHaveTextContent('Interactive-Menu')
  })
})
