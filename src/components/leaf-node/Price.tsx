import { ImInfo } from 'react-icons/im'
import * as React from 'react'
import { Ctx } from '../../context'
import { Divider } from '@chakra-ui/react'

const ToFixed: React.FC<{
  num: number | undefined
  unit?: Menu.SizeUnit
  size?: number
  isHH?: boolean
  currency?: "€" | "$"
}> = ({ num, unit, size, isHH = false, currency = '€' }) => (
  <span className="flex justify-center gap-x-1">
    {typeof num === 'number' && isHH ? (
      <span className="text-sm line-through text-blueGray-400">
        {num.toFixed(2)}
      </span>
    ) : (
      <span>
        {typeof num === 'number' && num.toFixed(2)}
        <span className="pl-1 text-blueGray-500">{currency}</span>
      </span>
    )}
    {(size || unit) && (
      <span className="text-blueGray-400">
        {size}
        {size ? unit : null}
      </span>
    )}
  </span>
)
interface PriceProps {
  price: Menu.Price
  size?: Menu.Size
  isOpen?: boolean
  isInfo?: boolean
  hasHH?: boolean
  sizeUnit?: Menu.SizeUnit
  onToggle?: (isOpen: boolean) => void
}
//=======================
export const Price: React.FC<PriceProps> = ({
  price,
  size,
  onToggle,
  isOpen,
  isInfo = false,
  sizeUnit,
  hasHH,
}) => {
  // hooks
  const { state } = React.useContext(Ctx)
  const { meta } = state
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="flex flex-col items-center justify-between ml-1 text-blueGray-600">
      <div className="flex items-center justify-center">
        {hasHH && meta.isHH && (
          <span className="flex flex-col mr-1">
            {price.pp1 && <ToFixed num={price.pp1} />}
            {price.pp2 && <ToFixed num={price.pp2} />}
          </span>
        )}

        {hasHH ? ( // ----hh price
          <span className="flex flex-col">
            {price.p1 && (
              <ToFixed
                isHH={meta.isHH}
                num={price.p1}
                size={size?.s1}
                unit={sizeUnit}
              />
            )}
            {price.p2 && (
              <ToFixed isHH={meta.isHH} num={price.p2} unit={sizeUnit} />
            )}
          </span>
        ) : (
          <span className="flex flex-col">
            {price.p1 && (
              <ToFixed num={price.p1} size={size?.s1} unit={sizeUnit} />
            )}
            {price.p2 && (
              <ToFixed num={price.p2} size={size?.s2} unit={sizeUnit} />
            )}
          </span>
        )}
      </div>
      <div className="flex flex-col items-center w-full">
        {isInfo && (
          <button
            aria-label="item-info"
            onClick={() => {
              onToggle(!isOpen)
            }}
            role="button"
            className="pb-1"
          >
            <ImInfo size="15" className="text-blue-300 " />
          </button>
        )}
        <Divider variant="dashed" />
      </div>
    </div>
  )
}
