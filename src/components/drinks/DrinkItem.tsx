import { useDisclosure } from '@chakra-ui/react'
import { LongText } from '../leaf-node'
import { Price } from '../leaf-node'

type Props = Menu.Item
//=======================
const DrinkItem: React.FC<{
  item: Props
  hasHH?: boolean
  sizeUnit?: Menu.SizeUnit
}> = ({ item, hasHH, sizeUnit }) => {
  // hooks
  //--------------------------------------
  // functions
  const { isOpen, onToggle } = useDisclosure()
  //--------------------------------------
  return (
    <div className="mb-3 text-blueGray-600">
      <div className="flex justify-between">
        <div className="pr-6">
          <span className="font-medium text-blueGray-700">{item.name}</span>
          {item.description && <LongText>{item.description}</LongText>}
          {item.ingredients && <LongText>{item.ingredients}</LongText>}
          {item.brandName && <LongText>{item.brandName}</LongText>}
          {item.filler && <LongText>{item.filler}</LongText>}
        </div>
        <Price
          hasHH={hasHH}
          sizeUnit={sizeUnit}
          isInfo={false}
          price={item.price}
          size={item.size}
          onToggle={onToggle}
          isOpen={isOpen}
        />
      </div>
    </div>
  )
}
export default DrinkItem
