import { render } from '@testing-library/react'
import React from 'react'
import {
  SvgIcon,
  GetMenuType,
  GetDishes,
  GetDrinks,
} from '../../src/components/leaf-node'

describe('SVG Icon', () => {
  test.each`
    iconName    | expectedResults
    ${'drinks'} | ${'svg-icon'}
    ${'dishes'} | ${'svg-icon'}
  `(`$iconName`, ({ iconName }) => {
    render(
      <SvgIcon>
        <GetMenuType iconName={iconName} />
      </SvgIcon>
    )
  })
  test.each`
    iconName           | expectedResults
    ${'dressing'}      | ${'svg-icon'}
    ${'burger'}        | ${'svg-icon'}
    ${'steak'}         | ${'svg-icon'}
    ${'vegan'}         | ${'svg-icon'}
    ${'kleinigkeiten'} | ${'svg-icon'}
    ${'salat'}         | ${'svg-icon'}
    ${'eis'}           | ${'svg-icon'}
    ${'flammkuchen'}   | ${'svg-icon'}
    ${'kinder'}        | ${'svg-icon'}
    ${'klassik'}       | ${'svg-icon'}
    ${'desserts'}      | ${'svg-icon'}
  `(`$iconName`, ({ iconName }) => {
    render(
      <SvgIcon>
        <GetDishes iconName={iconName} />
      </SvgIcon>
    )
  })
  test.each`
    iconName        | expectedResults
    ${'softdrinks'} | ${'svg-icon'}
    ${'beer'}       | ${'svg-icon'}
    ${'wine'}       | ${'svg-icon'}
    ${'hardLiquor'} | ${'svg-icon'}
    ${'shot glass'} | ${'svg-icon'}
    ${'juice'}      | ${'svg-icon'}
    ${'tea'}        | ${'svg-icon'}
    ${'coffee'}     | ${'svg-icon'}
    ${'cocktail'}   | ${'svg-icon'}
    ${'longdrink'}  | ${'svg-icon'}
  `(`$iconName`, ({ iconName }) => {
    render(
      <SvgIcon>
        <GetDrinks iconName={iconName} />
      </SvgIcon>
    )
  })
})
