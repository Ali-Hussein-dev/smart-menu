import { GetDrinks, MenuTop } from '@/components/leaf-node'
import * as React from 'react'
import { render } from '../testUtils'

describe('Menu Top: header & assest', () => {
  test('expect only a header', () => {
    const { container } = render(<MenuTop header="test header" />)
    expect(container).toHaveTextContent('test header')
  })
  test('expect a header & an icon', () => {
    const { container } = render(
      <MenuTop
        header="test header"
        Component={<GetDrinks iconName="coffee" />}
      />
    )
    const svg = container.querySelector('svg')
    expect(svg).toBeVisible()
  })
  test('expect a header & an avatar', () => {
    const { container } = render(
      <MenuTop
        header="test header"
        assest={{ avatarSrc: '/trude/mojito.jpg' }}
      />
    )
    const svg = container.querySelector('svg')
    expect(svg).toBeVisible()
  })
})
