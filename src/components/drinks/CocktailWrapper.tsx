/**
 * Todo internationalization
 *  lines 85
 */
import * as React from 'react'
import {
  concatenateHrsMin,
  useInterval,
  getInterval,
  withinTimeRange,
} from '../../utils/index'
import { GetDrinks, SvgIcon } from '../leaf-node'
import { Ctx } from '../../context'
import { ImInfo } from 'react-icons/im'
import dayjs from 'dayjs'

//=======================
const CocktailWrapper: React.FC = ({ children }) => {
  // hooks
  //----------------------------
  const { state, dispatch } = React.useContext(Ctx)
  const { hh1, hh2, available } = state.meta.timeRanges.cocktail
  const [currentTime, setCurrentTime] = React.useState(
    dayjs().get('h') * 60 + dayjs().get('m')
  )

  const timeTargets = [
    hh1.start,
    hh1.end,
    hh2.start,
    hh2.end,
    available.start,
    available.end,
  ]
  useInterval(
    () => {
      setCurrentTime(dayjs().get('h') * 60 + dayjs().get('m'))
      // -----------------------------'- 10' makes cocktail menu 10mins earlier
      if (withinTimeRange(currentTime, available.start - 10, available.end)) {
        dispatch({ type: 'onAvailable' })
        if (
          withinTimeRange(currentTime, hh1?.start, hh1?.end) ||
          withinTimeRange(currentTime, hh2?.start, hh2?.end)
        ) {
          dispatch({ type: 'onHH' })
        } else {
          dispatch({ type: 'offHH' })
        }
      } else {
        dispatch({ type: 'offAvailable' })
      }
    },
    [currentTime],
    getInterval(currentTime, timeTargets)
  )
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="pb-4">
      <div className="justify-center my-4 mb-6 f-row gap-x-5 card-border">
        <SvgIcon color="text-orange-700" size="w-20">
          <GetDrinks iconName={'cocktail'} />
        </SvgIcon>
        <div className="font-medium">
          <h3 className="text-xl font-black">HAPPY HOUR</h3>
          <div>
            <span>
              {concatenateHrsMin(hh1.longStart)}-
              {concatenateHrsMin(hh1.longEnd)}
            </span>
          </div>
          <div>
            <span>
              {concatenateHrsMin(hh2.longStart)}-
              {concatenateHrsMin(hh2.longEnd)}
            </span>
          </div>
        </div>
      </div>
      {state.meta.isCocktailAvailable ? (
        <div>
          <h3 className="mb-2 text-lg font-bold text-center text-blueGray-600">
            Cocktail
          </h3>
          {children}
        </div>
      ) : (
        <div className="card-border">
          <ImInfo size="25" className="mx-auto mb-2 text-amber-700" />
          <h3 data-testid="cocktailMsg ">
            {state.meta.timeRanges.cocktail.cocktailOffMsg}
          </h3>
        </div>
      )}
    </div>
  )
}

export default CocktailWrapper
