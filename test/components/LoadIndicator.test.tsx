import { LoadIndicator } from '@/components/leaf-node'
import * as React from 'react'
import { render } from '../testUtils'

describe('LoadIndicator', () => {
  test('matches snapshot', () => {
    const { container } = render(<LoadIndicator />)
    expect(container).toMatchSnapshot()
  })
})
