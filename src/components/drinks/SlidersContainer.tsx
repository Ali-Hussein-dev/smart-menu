import SwiperCore, { Pagination, A11y, EffectCoverflow } from 'swiper'
import { Swiper } from 'swiper/react'

SwiperCore.use([Pagination, A11y, EffectCoverflow])

//=======================
const SlidersContainer: React.FC = ({ children }) => {
  return (
    <div className="mx-2 overflow-hidden rounded-t-lg">
      <Swiper
        effect="coverflow"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={10}
        slidesPerView={1}
      >
        {children}
      </Swiper>
    </div>
  )
}
export default SlidersContainer
