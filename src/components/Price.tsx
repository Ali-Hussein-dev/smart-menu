import { ImInfo } from 'react-icons/im'
interface Types {
  price: number
  visible: boolean
  setVisible: (visible: boolean) => void
}
//=======================
const Price: React.FC<Types> = ({ price, setVisible, visible }) => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="flex flex-col items-center">
      {' '}
      <span>{price.toFixed(2)}</span>
      <button
        aria-label={`info-${price}`}
        id={`info-${price}`}
        onClick={() => {
          setVisible(!visible)
        }}
        role="button"
        className="p-1"
      >
        <ImInfo size="15" />
      </button>
    </div>
  )
}
export default Price
