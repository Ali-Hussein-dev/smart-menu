/**
 * Todo internationalization
 *  lines 56
 * Todo refactor
 * line 50
 */
import * as React from 'react'
import { concatenateHrsMin, withinTimeRange } from '../../utils/index'
import { GetDrinks, SvgIcon } from '../leaf-node'
import { Ctx } from '../../context'
import { ImInfo } from 'react-icons/im'

//=======================
const CocktailWrapper: React.FC<{ currentTime?: number }> = ({
  currentTime,
  children,
}) => {
  // hooks
  const { state, dispatch } = React.useContext(Ctx)
  const { hh1, hh2, available } = state.meta.timeRanges.cocktail
  React.useEffect(() => {
    if (withinTimeRange(currentTime + 5, available.start, available.end)) {
      dispatch({ type: 'onAvailable' })
      if (
        withinTimeRange(currentTime, hh1?.start, hh1?.end) ||
        withinTimeRange(currentTime, hh2?.start, hh2?.end)
      ) {
        dispatch({ type: 'onHH' })
      }
    }
  }, [currentTime])
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="pb-4 mb-8 ">
      <div className="flex items-center justify-center w-10/12 px-4 py-4 mx-auto my-4 text-lg text-center rounded-lg shadow-lg dow-lg sm:w-7/12 text-blueGray-600 gap-x-5">
        <SvgIcon color="text-orange-700" size="w-20">
          <GetDrinks iconName={'cocktail'} />
        </SvgIcon>
        <div>
          <h3 className="text-xl font-black">HAPPY HOUR</h3>
          <div>
            <span>
              {concatenateHrsMin(hh1.longStart.hrs, hh1.longStart.min)}-
              {concatenateHrsMin(hh1.longEnd.hrs, hh1.longEnd.min)}
            </span>
          </div>
          <div>
            <span>
              {concatenateHrsMin(hh2.longStart.hrs, hh2.longStart.min)}-
              {concatenateHrsMin(hh2.longEnd.hrs, hh2.longEnd.min)}
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
        <div className="w-10/12 px-2 py-4 mx-auto mt-4 text-lg font-semibold text-center text-gray-500 border rounded-lg border-blueGray-300 sm:w-7/12">
          <ImInfo size="25" className="mx-auto mb-2 text-amber-700" />
          <h3 data-testid="cocktailMsg">
            {state.meta.timeRanges.cocktail.cocktailOffMsg}
          </h3>
        </div>
      )}
    </div>
  )
}

export default CocktailWrapper
