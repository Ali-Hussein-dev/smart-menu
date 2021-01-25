import { render } from '@testing-library/react'
import React from 'react'
import {
  SvgIcon,
  GetMenuType,
  GetDishes,
  GetDrinks,
} from '../../src/components/leaf-node'

describe('SVG Icon', () => {
  it('dishes menu matches snapshot', () => {
    const { container } = render(
      <SvgIcon>
        <GetMenuType iconName="dishes" />
      </SvgIcon>
    )
    expect(container).toMatchSnapshot()
  })
  it('drinks menu matches snapshot', () => {
    const { container } = render(
      <SvgIcon>
        <GetMenuType iconName={'drinks'} />
      </SvgIcon>
    )
    expect(container).toMatchSnapshot()
  })
  it('burger icon matches snapshot', () => {
    const { container } = render(
      <SvgIcon>
        <GetDishes iconName={'burger'} />
      </SvgIcon>
    )
    expect(container).toMatchSnapshot()
  })
  it('softdrinks icon matches snapshot', () => {
    const { container } = render(
      <SvgIcon>
        <GetDrinks iconName={'softdrinks'} />
      </SvgIcon>
    )
    expect(container).toMatchSnapshot()
  })
})
