import { Image } from '@chakra-ui/image'
import { Skeleton } from '@chakra-ui/skeleton'
import * as React from 'react'
import { ImInfo, ImCancelCircle } from 'react-icons/im'
import { CC } from './CC'
interface InfoBtnProps extends React.ComponentPropsWithoutRef<'button'> {
  isOpen: boolean
}
const InfoBtn: React.FC<InfoBtnProps> = (props) => {
  const { isOpen, ...restProps } = props
  return (
    <button
      role="button"
      aria-label="toggle-info"
      aria-pressed={isOpen}
      className={`absolute z-10 transform focus:outline-none ${
        isOpen ? '-top-8' : 'bottom-2'
      } right-2 active:scale-90 bg-white  text-orange-800 p-1 rounded-lg shadow`}
      {...restProps}
    >
      <CC isTrue={!isOpen}>
        <ImInfo size="25" />
      </CC>
      <CC isTrue={isOpen}>
        <ImCancelCircle size="25" />
      </CC>
    </button>
  )
}

//=======================
export const SliderChildren: React.FC<{
  imgSrc?: string
  alt?: string
  isInfoOpen?: boolean
}> = ({ children, imgSrc, alt, isInfoOpen = false }) => {
  // hooks
  const [isOpen, setIsOpen] = React.useState(isInfoOpen)
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="relative">
      <CC isTrue={imgSrc}>
        <Image
          src={imgSrc}
          alt={alt}
          className="mx-auto mt-3 rounded-lg"
          fallback={<Skeleton height="360px" />}
        />
      </CC>
      <CC isTrue={!isOpen}>
        <InfoBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </CC>
      <CC isTrue={isOpen}>
        <div className="absolute bottom-0 w-full px-2 py-4 bg-white opacity-95">
          <div className="relative top-0 right-0 pt-2 ">
            <InfoBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
          {children}
        </div>
      </CC>
    </div>
  )
}
