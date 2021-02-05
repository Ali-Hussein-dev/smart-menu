import React from 'react'
import { ImInfo } from 'react-icons/im'

//=======================
export const SliderChildren: React.FC<{ imgSrc?: string; alt?: string }> = ({
  children,
  imgSrc,
  alt,
}) => {
  // hooks
  const [isOpen, setIsOpen] = React.useState(false)
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="">
      <div className="relative">
        {imgSrc && (
          <img src={imgSrc} alt={alt} className="mx-auto mt-3 rounded-lg" />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          aria-label="toggle-info"
          className={`absolute z-10 transform focus:outline-none bottom-2 right-4 active:scale-90`}
        >
          <ImInfo size="25"className="text-orange-800" />
        </button>
        {isOpen && (
          <div className="absolute bottom-0 w-full px-2 py-4 bg-white opacity-95">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
