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
    <div className="mb-2">
      <div className="relative">
        {imgSrc && (
          <img src={imgSrc} alt={alt} className="mx-auto rounded-lg" />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          aria-label="toggle-info"
          className={`absolute z-10 ${
            isOpen ? 'text-blueGray-600' : 'text-white'
          } transform focus:outline-none bottom-2 right-4 active:scale-90`}
        >
          <ImInfo size="25" />
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
