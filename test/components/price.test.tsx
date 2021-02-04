import { render } from '../testUtils'
import { Ctx } from '../../src/context'
import { Price } from '../../src/components/leaf-node'
import MegaList from '../../database/index'
import * as React from 'react'

/**
 * ?note:
 * do not expect Drawer to be in the dom because it is rendered by DisheItem, price is just send an event
 */

describe('Price', () => {
  let price
  let size
  beforeEach(() => {
    price = {
      p1: 9.5,
      p2: 12.5,
      pp1: 4.4,
      pp2: 8.4,
    }
    size = { s1: 0.3, s2: 0.5 }
  })

  test('Is price visible', () => {
    const { container } = render(
      <Ctx.Provider value={{ state: MegaList[0] }}>
        <Price price={price} />
      </Ctx.Provider>
    )
    expect(container).toMatchSnapshot()
  })
  test('Is info button visible', () => {
    const { container } = render(
      <Ctx.Provider value={{ state: MegaList[0] }}>
        <Price price={price} isInfo={true} />
      </Ctx.Provider>
    )
    expect(container).toMatchSnapshot()
  })
  test('Is price visible with size & units', () => {
    const { container } = render(
      <Ctx.Provider value={{ state: MegaList[0] }}>
        <Price price={price} size={size} sizeUnit="L" />
      </Ctx.Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
