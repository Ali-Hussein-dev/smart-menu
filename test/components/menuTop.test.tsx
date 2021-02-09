import { GetDrinks, MenuTop } from '@/components/leaf-node'
import { screen, waitFor } from '@testing-library/dom'
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
  test('expect a header & an avatar', async () => {
    render(
      <MenuTop
        header="test header"
        assest={{
          avatarSrc:
            'https://wodkablog.de/wp-content/uploads/wodka-longdrink-800x532.jpg',
        }}
      />
    )
    const imgAlt = screen.findByAltText('test header')
    waitFor(() => expect(imgAlt).toBeVisible())
  })
})
