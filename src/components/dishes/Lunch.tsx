import { withinTimeRange } from 'src/utils'
import dayjs from 'dayjs'
import { Ctx } from 'src/context'
import * as React from 'react'
// import { MdDateRange, MdAccessTime } from 'react-icons/md'
// import { IoPricetagsOutline } from 'react-icons/io5'
//=======================
export const Lunch: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  // hooks
  const { state, dispatch } = React.useContext(Ctx)
  //--------------------------------------
  // functions
  React.useEffect(() => {
    if (
      state.meta.timeRanges.lunch.unavailableDays.filter((num) => {
        num === dayjs().get('d')
      }).length === 1
    ) {
      dispatch({ type: 'offLunch' })
    } else if (
      withinTimeRange(
        currentTime,
        //------------------make lunch available 3hrs earlier
        state.meta.timeRanges.lunch.start - 180,
        state.meta.timeRanges.lunch.end
      )
    ) {
      dispatch({ type: 'onLunch' })
    } else {
      dispatch({ type: 'offLunch' })
    }
  }, [currentTime])
  //--------------------------------------
  switch (state.meta.isLunch) {
    case true:
      return (
        <section className="text-blueGray-600">
          <div className="flex flex-col pl-2 mb-2 gap-y-2">
            <h2 className="font-bold text-center">Mittagessen</h2>
            {/* <span className="flex items-center gap-x-2">
              <MdDateRange size="20" /> 12.3.2021 - 20.3.2021 | Montag bis
              Freitag
            </span>
            <span className="flex items-center gap-x-2">
              <MdAccessTime size="20" />
              11:30-17:00 Uhr
            </span>
            <span className="flex items-center gap-x-2">
              <IoPricetagsOutline size="20" />
              8.80€
            </span> */}
          </div>
          <div className="px-2">
            <img
              className="w-full mx-auto mb-4 object-fill rounded-lg"
              src="https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-salmon-with-sweet-soy-sauce-in-a-korean-restaurant.jpg"
            />
          </div>
        </section>
      )
    default:
      return null
  }
}
