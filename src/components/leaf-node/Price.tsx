import { ImInfo } from 'react-icons/im'
interface Types {
  price: Menu.Price
  isOpen?: boolean
  isInfo?: boolean
  sizeUnit?: Menu.SizeUnit
  onToggle?: (isOpen: boolean) => void
}
const ToFixed: React.FC<{
  num: number | undefined
  unit?: string
  size?: number
  lineThrough?: boolean
}> = ({ num, unit, size, lineThrough }) => (
  <span
    className={`${
      lineThrough ? 'line-through text-xsm text-blueGray-400' : ''
    } text-blueGray-800`}
  >
    {typeof num === 'number' && num.toFixed(2)}
    <span className="text-blueGray-500">
      {' '}
      {size}
      {unit}
    </span>
  </span>
)
//=======================
export const Price: React.FC<Types> = ({
  price,
  onToggle,
  isOpen,
  isInfo = false,
  // sizeUnit,
}) => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="flex flex-col items-center">
      {' '}
      {/* need to be  */}
      <div className="flex flex-col">
        <ToFixed num={price.p1} />
        <ToFixed num={price.p2} />
      </div>
      <button
        aria-label={`info-${price}`}
        id={`info-${price}`}
        onClick={() => {
          onToggle(!isOpen)
        }}
        role="button"
        className="p-1"
      >
        {isInfo && <ImInfo size="15" />}
      </button>
    </div>
  )
}
