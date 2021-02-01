import * as React from 'react'
import { render } from '../testUtils'
import { Home } from '../../src/pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />, {})
    expect(container).toMatchSnapshot()
  })
})
export {}
