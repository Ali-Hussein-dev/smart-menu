import { FruitIcon, SvgIcon } from '@/components/leaf-node/'
import { screen, render } from '../testUtils.js'

describe('FruitIcon', () => {
  test.each`
    iconName        | expectedResults
    ${'apple'}      | ${'svg-icon'}
    ${'cranberry'}  | ${'svg-icon'}
    ${'orange'}     | ${'svg-icon'}
    ${'pineapple'}  | ${'svg-icon'}
    ${'cherry'}     | ${'svg-icon'}
    ${'peach'}      | ${'svg-icon'}
    ${'banana'}     | ${'svg-icon'}
    ${'grapefruit'} | ${'svg-icon'}
    ${'passion'}    | ${'svg-icon'}
    ${'rhabarber'}  | ${'svg-icon'}
    ${'grapes'}      | ${'svg-icon'}
    ${'blueberry'}  | ${'svg-icon'}
    ${'pomegranate'}  | ${'svg-icon'}
  `(`$iconName`, ({ iconName }) => {
    render(
      <SvgIcon>
        <FruitIcon iconName={iconName} />
      </SvgIcon>
    )
    // debug()
    expect(screen.getByTestId('svg-icon')).toBeVisible()
  })
})
