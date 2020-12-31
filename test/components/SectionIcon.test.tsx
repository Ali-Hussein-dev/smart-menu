import { render } from '@testing-library/react'
import React from 'react'
import SectionIcon from '../../src/components/SectionIcon'

describe('Section Icon', () => {
  it('burger icon matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="burger" />)
    expect(container).toMatchSnapshot()
  })
  it('vegan icon matches snapshot with customColor', () => {
    const { container } = render(
      <SectionIcon iconName="vegan" customColor="bg-orange-500" />
    )
    expect(container).toMatchSnapshot()
  })
  it('vegan icon matches snapshot with default color', () => {
    const { container } = render(<SectionIcon iconName="vegan" />)
    expect(container).toMatchSnapshot()
  })
  it('wine icon matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="wine" />)
    expect(container).toMatchSnapshot()
  })
  it('steak  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="steak" />)
    expect(container).toMatchSnapshot()
  })
  it('coffee  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="coffee" />)
    expect(container).toMatchSnapshot()
  })
  it('klassik  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="klassik" />)
    expect(container).toMatchSnapshot()
  })
  it('flammkuchen  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="flammkuchen" />)
    expect(container).toMatchSnapshot()
  })
  it('eis  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="eis" />)
    expect(container).toMatchSnapshot()
  })
  it('kinder  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="kinder" />)
    expect(container).toMatchSnapshot()
  })
  it('shot glass  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="shot glass" />)
    expect(container).toMatchSnapshot()
  })
  it('cocktail  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="cocktail" />)
    expect(container).toMatchSnapshot()
  })
  it('hardLiquor  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="hardLiquor" />)
    expect(container).toMatchSnapshot()
  })
  it('salat  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="salat" />)
    expect(container).toMatchSnapshot()
  })
  it('desserts  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="desserts" />)
    expect(container).toMatchSnapshot()
  })
  it('kleinigkeiten  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="kleinigkeiten" />)
    expect(container).toMatchSnapshot()
  })
  it('beer  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="beer" />)
    expect(container).toMatchSnapshot()
  })
  it('tea  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="tea" />)
    expect(container).toMatchSnapshot()
  })
  it('juice  matches snapshot', () => {
    const { container } = render(<SectionIcon iconName="juice" />)
    expect(container).toMatchSnapshot()
  })
})
