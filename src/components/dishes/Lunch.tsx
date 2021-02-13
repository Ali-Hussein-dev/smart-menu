import { concatenateHrsMin, useInterval, withinTimeRange } from 'src/utils'
import dayjs from 'dayjs'
import { Ctx } from 'src/context'
import * as React from 'react'
import { MdDateRange, MdAccessTime } from 'react-icons/md'
import { DishItem } from './DishItem'
import SlidersContainer from '../drinks/SlidersContainer'
import { SliderChildren } from '../leaf-node'
import { SwiperSlide } from 'swiper/react'

//=======================
export const Lunch: React.FC<{ items: Menu.Item[] }> = ({ items }) => {
  // hooks
  const { state, dispatch } = React.useContext(Ctx)
  const { lunch } = state.meta.timeRanges

  const [currentTime, setCurrentTime] = React.useState(
    dayjs().get('h') * 60 + dayjs().get('m')
  )
  //--------------------------------------
  useInterval(() => {
    setCurrentTime(dayjs().get('h') * 60 + dayjs().get('m'))
    if (
      lunch.unavailableDays.filter((num) => num === dayjs().get('d')).length ===
      1
    ) {
      dispatch({ type: 'offLunch' })
    } else if (
      withinTimeRange(
        currentTime,
        //------------------make lunch available 3hrs earlier
        lunch.start - 180,
        lunch.end
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
        <section className="mx-2 mb-4 border rounded-lg border-blueGray-300">
          <SlidersContainer>
            {items.map((o) => (
              <SwiperSlide key={o.name}>
                <SliderChildren imgSrc={o.imgSrc} isInfoOpen={false}>
                  <DishItem item={o} />
                </SliderChildren>
              </SwiperSlide>
            ))}
          </SlidersContainer>
          <h2 className="mt-2 font-bold pl-9 text-blueGray-600">
            Mittagessen Zeit
          </h2>
          <div className="pl-2 mb-3 text-blueGray-400">
            <span className="f-row gap-x-2">
              <MdAccessTime size="20" />
              <span>
                {concatenateHrsMin(lunch.longStart)} -{' '}
                {concatenateHrsMin(lunch.longEnd)} | Montag bis Freitag
              </span>
            </span>
            <span className="f-row gap-x-2">
              <MdDateRange size="20" />
              <span>12.3.2021 - 20.3.2021</span>
            </span>
          </div>
        </section>
      )
    default:
      return null
  }
}
