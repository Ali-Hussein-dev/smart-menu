import { render } from '../testUtils'
import MegaList from '../../database/index'
import DrinkItem from '../../src/components/drinks/DrinkItem'
import { Ctx } from '../../src/context'

const drinks = MegaList[0].menu.de.drinks
const softdrinkItem = drinks.drinks[0][1].list[0][1].itemsList[0]
const cocktailItem = drinks.cocktail[0][1].list[0][1].itemsList[0]
const longdrinkItem = drinks.drinks[6][1].list[1][1].itemsList[1]
const coffeeAddonItem = drinks.drinks[4][1].list[1][1].addon.addonList[1]

describe('DrinkItem', () => {
  test('softdrink item matches snapshot', () => {
    const { container } = render(
      <Ctx.Provider value={{ state: MegaList[0] }}>
        <DrinkItem item={softdrinkItem} sizeUnit={'L'} />
      </Ctx.Provider>
    )
    expect(container).toMatchSnapshot()
  })
  test('cocktail: non-hh time matches snapshot', () => {
    const { container } = render(
      <Ctx.Provider value={{ state: MegaList[0] }}>
        <DrinkItem item={cocktailItem} hasHH />
      </Ctx.Provider>
    )
    expect(container).toMatchSnapshot()
  })
  test('longdrink: matches snapshot', () => {
    const { container } = render(
      <Ctx.Provider value={{ state: MegaList[0] }}>
        <DrinkItem item={longdrinkItem} hasHH />
      </Ctx.Provider>
    )
    expect(container).toMatchSnapshot()
  })
  test('Coffee addon: matches snapshot', () => {
    const { container } = render(
      <Ctx.Provider value={{ state: MegaList[0] }}>
        <DrinkItem item={coffeeAddonItem} hasHH />
      </Ctx.Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
