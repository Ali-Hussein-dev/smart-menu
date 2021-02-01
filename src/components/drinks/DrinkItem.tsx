import { useDisclosure } from '@chakra-ui/react'
import Menu from 'src/pages/restaurants/[name]/[menu]'
import { FruitIcon, LongText, SvgIcon } from '../leaf-node'
import { Price } from '../leaf-node'

type Props = Menu.Item & Partial<Menu.Tea>
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
        <div className="flex flex-col pr-2">
          {item.imgSrc?.length < 11 ? (
            <div className="flex items-center">
              <SvgIcon color="mr-2">
                <FruitIcon iconName={item.imgSrc} />
              </SvgIcon>
              <span className="font-medium text-blueGray-700">{item.name}</span>
            </div>
          ) : (
            <span className="font-medium text-blueGray-700">{item.name}</span>
          )}

          {item.description && (
            <LongText>
              {item.description}
              {item.teaArt && (
                <div className="flex flex-col text-blue-400">
                  <span>{item.teaArt}</span>
                  <span>{item.ziehZeit}</span>
                </div>
              )}
            </LongText>
          )}
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
