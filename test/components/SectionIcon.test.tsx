import { render } from '@testing-library/react'
import React from 'react'
import SectionIcon from '../../src/components/SectionIcon'

describe('Section Icon', () => {
  it('burger icon matches snapshot', () => {
    const { container } = render(
      <SectionIcon menu="dishes" iconName="burger" />
    )
    expect(container).toMatchSnapshot()
  })
  it('vegan icon matches snapshot with customColor', () => {
    const { container } = render(
      <SectionIcon menu="dishes" iconName="vegan" customColor="bg-orange-500" />
    )
    expect(container).toMatchSnapshot()
  })
  it('vegan icon matches dnapshot with default color', () => {
    const { container } = render(<SectionIcon menu="dishes" iconName="vegan" />)
    expect(container).toMatchSnapshot()
  })
  it('softdrinks icon matches snapshot with default color', () => {
    const { container } = render(
      <SectionIcon menu="drinks" iconName="softdrinks" />
    )
    expect(container).toMatchSnapshot()
  })
})
